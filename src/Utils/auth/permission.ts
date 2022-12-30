import { Auth_I, Permission_E } from "../../Model";

export interface setAuthPermission {
  (A: Auth_I, P: String): void;
}

export const setPermission: setAuthPermission = (A: Auth_I, P: String) => {
  A.permission = Permission_E[P as keyof typeof Permission_E];
};

export const handlePermissionCallback = (
  permission: Permission_E,
  AdminCallBack?: (...args: any) => any,
  UserCallBack?: (...args: any) => any,
  UnknownCallback?: (...args: any) => any
): any => {
  if (permission === Permission_E.Admin) {
    if (AdminCallBack!!) {
      return AdminCallBack();
    }
  }

  if (permission === Permission_E.User) {
    if (UserCallBack!!) {
      return UserCallBack();
    }
  }

  if (UnknownCallback!!) {
    return UnknownCallback();
  }

  return undefined;
};
