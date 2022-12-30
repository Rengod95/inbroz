import { SignUP_I } from "./signUP";

export interface SignIn_I {
  email: String;
  password: String;
}

export class SignIn implements SignIn_I {
  email: String;
  password: String;

  constructor(_email: String, _password: String) {
    this.email = _email;
    this.password = _password;
  }

  getInfo = (): SignIn_I => {
    return {
      email: this.email,
      password: this.password,
    };
  };
}
