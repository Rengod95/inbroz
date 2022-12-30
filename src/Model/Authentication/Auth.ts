export interface Auth_I {
  name: String;
  email: String;
  permission: Permission_E;
}

export enum Permission_E {
  Admin = "Admin",
  User = "User",
  UnKnown = "Unknown",
}
