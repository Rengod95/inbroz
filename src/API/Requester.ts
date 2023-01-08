import axios from "axios";
import { SignIn, SignUp } from "../Model";
import { ENDPOINT } from "./ENDPOINT";

const Requester = (function () {
  const Authenticate = async (user: SignUp | SignIn): Promise<unknown> => {
    let url: string;

    if (user instanceof SignIn) url = ENDPOINT.SIGN_IN;
    else url = ENDPOINT.SIGN_UP;

    try {
      console.log(user.getInfo(), url);
      return await axios({
        url: url,
        method: "POST",
        data: user.getInfo(),
      });
    } catch (e) {
      throw e;
    }
  };

  return {
    Authenticate,
  };
})();

export default Requester;
