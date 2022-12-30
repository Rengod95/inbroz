import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGE } from "../../API/ENDPOINT";
import styled from "@emotion/styled";
import StyledButton from "../../components/common/StyledButton";

export const authLocationHandler = (
  location: string,
  SignUpCallBack: () => any,
  SignInCallBack: () => any
) => {
  if (location === PAGE.PAGE_SIGN_UP) {
    SignUpCallBack();
  } else if (location === PAGE.PAGE_SIGN_IN) {
    SignInCallBack();
  }
};

const SideCardContainer = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & h1 {
    font-size: 52px;
    font-weight: 700;
    line-height: 30px;
    min-width: 100%;
    text-align: center;
  }

  & h2 {
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 50px;
    font-size: 24px;
    min-width: 100%;
    margin-top: 12rem;
    text-align: center;
  }
`;

const SideCard = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [direction, setDirection] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  const SignUpCallBack = () => {
    setTitle("로그인");
    setDirection(PAGE.PAGE_SIGN_IN);
    setDescription("이미 계정이 있으신가요? 아래 버튼을 통해 로그인 하세요!");
  };

  const SignInCallBack = () => {
    setTitle("계정 생성");
    setDirection(PAGE.PAGE_SIGN_UP);
    setDescription(
      "아직 계정이 없으신가요?| 정상적인 서비스 이용을 위해, | 계정을 생성 해주세요!"
    );
  };

  const buttonClickHandler = () => {
    console.log("사이드카드 버튼 핸들러");
    navigate(direction);
  };

  useEffect(() => {
    authLocationHandler(location.pathname, SignUpCallBack, SignInCallBack);
  }, [location]);

  return (
    <SideCardContainer>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <div>
        <StyledButton
          width={"250px"}
          height={"60px"}
          onClick={buttonClickHandler}
        >
          {title}
        </StyledButton>
      </div>
    </SideCardContainer>
  );
};

export default SideCard;
