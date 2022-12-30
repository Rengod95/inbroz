import { atom } from "recoil";
import { Auth_I, Permission_E } from "../../Model";

const authDefault: Auth_I = {
  name: "",
  email: "",
  permission: Permission_E.UnKnown,
};

export const Auth = atom({
  key: "Auth",
  default: authDefault,
});
