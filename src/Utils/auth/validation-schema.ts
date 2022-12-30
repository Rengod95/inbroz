import * as yup from "yup";

export const SignUp = yup.object().shape({
  name: yup
    .string()
    .required("이름은 필수 입력 값 입니다.")
    .min(2, "이름은 최소 2자 이상이어야 합니다.")
    .max(10, "이름은 최대 10자 입니다."),
  phone_number: yup
    .number()
    .typeError("휴대폰 번호는 숫자로만 구성되어야 합니다.")
    .required("휴대폰 번호는 필수 입력 값 입니다.")
    .moreThan(2, "휴대폰 번호는 최소 2자 이상이어야 합니다."),

  auth_key: yup
    .number()
    .typeError("인증키는 는 숫자여야만 합니다.")
    .required("인증키는 필수 입력 값 입니다."),

  password: yup
    .string()
    .required("비밀번호는 필수 입력 값 입니다.")
    .min(2, "비밀번호는 최소 4자 이상이어야 합니다.")
    .max(30, "비밀번호는 최대 30자 입니다."),
});

export const SignIn = yup.object().shape({
  email: yup
    .string()
    .required("이메일은 필수 입력 값 입니다.")
    .min(1, "이메일은 최소 1자 이상이어야 합니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 값 입니다.")
    .min(4, "비밀번호는 최소 4자 이상이어야 합니다.")
    .max(30, "비밀번호는 최대 30자 입니다."),
});
