import { selector } from "recoil";
import { Auth } from "./atom";
import { Permission_E } from "../../Model";

export const isLoggedIn = selector<boolean>({
  key: "isLoggedIn",
  get: ({ get }) => {
    const { permission } = get(Auth);
    if (permission === Permission_E.User || permission === Permission_E.Admin)
      return true;
    else return false;
  },
});

export default isLoggedIn;
