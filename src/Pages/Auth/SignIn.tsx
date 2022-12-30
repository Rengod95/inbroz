import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import useToast from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";

import { SignIn as validation } from "../../Utils/auth";

import DefaultToast from "../../components/common/DefaultToast";
import StyledButton from "../../components/common/StyledButton";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import StyledInput from "../../components/common/StyledInput";
import Requester from "../../API/Requester";
import { SignIn as SignInObject } from "../../Model/index";

export const StyledFormContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  flex-direction: column;
  flex-wrap: nowrap;
  border-right: ${(props) => props.theme.color.success} 1.5px solid;
  h1 {
    text-align: center;
  }
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1.5fr 1.5fr 7fr;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  min-height: 500px;
  max-height: 500px;
  padding: 45px 70px;
`;

const SignIn = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const formMethods = useForm({
    resolver: yupResolver(validation),
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleValidSubmit = async (data: any, event: any) => {
    event.preventDefault();
    try {
      console.log(data);
      const res = await Requester.Authenticate(
        new SignInObject(data.email, data.passwrod)
      );
    } catch (e) {
      toast.handlers.changeToastType("error");
      toast.handlers.changeToastTitle("통신 오류");
      toast.handlers.changeToastMessage("로그인 시도 중 에러 발생");
    }
  };

  const handleInvalidSubmit = (error: any, event: any) => {
    event.preventDefault();
    toast.handlers.changeToastType("error");
    toast.handlers.changeToastTitle("유효성 오류");
    toast.handlers.changeToastMessage("옳바른 값을 입력 해 주세요.");
    toast.handlers.reverseToastOpenState();
  };

  return (
    <StyledFormContainer>
      <h1>로그인</h1>
      <FormProvider {...formMethods}>
        <StyledForm
          onSubmit={formMethods.handleSubmit(
            handleValidSubmit,
            handleInvalidSubmit
          )}
        >
          <StyledInput name={"email"} type={"text"} />
          <StyledInput name={"password"} type={"password"} />
          <StyledButton
            onClick={formMethods.handleSubmit(
              handleValidSubmit,
              handleInvalidSubmit
            )}
            disabled={buttonDisabled}
            width={"250px"}
            height={"50px"}
          >
            로그인
          </StyledButton>
        </StyledForm>
      </FormProvider>
      <DefaultToast
        title={toast.states.toastTitle}
        message={toast.states.toastMessage}
        type={toast.states.toastType}
        open={toast.states.toastIsOpen}
        duration={3000}
        callBack={toast.handlers.closeToast}
      />
    </StyledFormContainer>
  );
};

export default SignIn;
