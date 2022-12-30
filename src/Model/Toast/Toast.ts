export interface Toast_I {
  title: String;
  message: String;
  callBack?: (...args: any) => any;
  type: Toast_Types;
}

export type Toast_Types = "success" | "info" | "warning" | "error";
export class Toast implements Toast_I {
  title: String = "";
  message: String = "";
  callBack: (args: any[]) => any = () => {};
  type: Toast_Types = "success";

  constructor(
    _title: String,
    _message: String,
    _callBack: (args: any[]) => any,
    _type: Toast_Types
  ) {
    this.title = _title;
    this.message = _message;
    this.callBack = _callBack;
    this.type = _type;
  }

  getTitle = () => {
    return this.title;
  };
  getMessage = () => {
    return this.message;
  };
  getCallBack = () => {
    return this.callBack;
  };
  getType = () => {
    return this.type;
  };
}
