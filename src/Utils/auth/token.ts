// import axios from "axios/index";
import axios from "axios";
import { AxiosRequestConfig } from "axios";
import mem from "mem";
import { ENDPOINT } from "../../API/ENDPOINT";

export const TokenUtil = (function () {
  /* -------------------------- axios header -------------------------- */
  const setAccessTokenOnHeader = (accessToken: any) => {
    axios.defaults.headers.common["Authorization"] = accessToken;
  };

  const removeAccessTokenOnHeader = () => {
    axios.defaults.headers.common["Authorization"] = undefined;
  };

  /* -------------------------- Storage -------------------------- */
  const setAccessTokenOnStorage = (accessToken: any) => {
    window.localStorage.setItem("Access-Token", accessToken);
  };

  const setRefreshTokenOnStorage = (refreshToken: any) => {
    window.localStorage.setItem("Refresh-Token", refreshToken);
  };

  const removeTokensOnStorage = () => {
    window.localStorage.removeItem("Access-Token");
    window.localStorage.removeItem("Refresh-Token");
  };

  const getAccessToken = (): String | undefined => {
    const token = localStorage.getItem("Access-Token");
    if (!!token) return token;
    return undefined;
  };
  const getRefreshToken = (): String | undefined => {
    const token = localStorage.getItem("Refresh-Token");
    if (!!token) return token;
    return undefined;
  };

  /* -------------------------- interceptor -------------------------- */

  const requestInterceptor = (config: AxiosRequestConfig) => {
    if (!config.headers) return config;
    let token: String | undefined = undefined;

    if (config.url === ENDPOINT.REFRESH_TOKEN) {
      token = getRefreshToken();
    } else {
      token = getAccessToken();
    }
    if (token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
      // @ts-ignore
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return config;
  };

  const responseInterceptor = async (err: any) => {
    const {
      config,
      response: { status },
    } = err;

    if (
      config.url === ENDPOINT.REFRESH_TOKEN ||
      status !== 401 ||
      config.sent
    ) {
      return Promise.reject(err);
    }

    config.sent = true;
    const accessToken = await publishNewToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return axios(config);
    }

    return Promise.reject(err);
  };

  const publishNewToken = mem(
    async (): Promise<string | void> => {
      try {
        const {
          data: { accessToken, refreshToken },
        } = await axios.get<{
          accessToken: string;
          refreshToken: string | null;
        }>(ENDPOINT.REFRESH_TOKEN);

        localStorage.setItem("accessToken", accessToken);

        if (refreshToken !== null) {
          localStorage.setItem("refreshToken", refreshToken);
        }

        return accessToken;
      } catch (e) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    },
    { maxAge: 1000 }
  );

  return {
    setAccessTokenOnHeader,
    removeAccessTokenOnHeader,
    setAccessTokenOnStorage,
    setRefreshTokenOnStorage,
    removeTokensOnStorage,
    getAccessToken,
    getRefreshToken,
    requestInterceptor,
    responseInterceptor,
  };
})();
