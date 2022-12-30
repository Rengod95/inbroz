export interface SignUP_I {
  name: String;
  email: String;
  password: String;
}

export class SignUp implements SignUP_I {
  name: String;
  email: String;
  password: String;
  constructor(_name: String, _email: String, _password: String) {
    this.name = _name;
    this.email = _email;
    this.password = _password;
  }

  getInfo = () => {
    const info: SignUP_I = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    return info;
  };
}
