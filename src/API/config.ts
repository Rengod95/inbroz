import axios, { AxiosError } from "axios/index";
import { TokenUtil } from "../Utils/auth";

// header configuration
axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;

// Interceptors
axios.interceptors.request.use(TokenUtil.requestInterceptor);
axios.interceptors.response.use((res) => res, TokenUtil.responseInterceptor);
