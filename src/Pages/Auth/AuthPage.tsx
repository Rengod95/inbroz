import React from "react";
import styled from "@emotion/styled";
import { Route, Routes, RoutesProps, useLocation } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { PAGE } from "../../API/ENDPOINT";
import SideCard, { authLocationHandler } from "./SideCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 0;
  min-width: 920px;
  max-width: 920px;
  max-height: 580px;
  min-height: 580px;
  padding: 15px;
  background-color: rgba(33, 27, 72, 0.7);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 15px -3px,
    rgba(11, 4, 127, 0.3) 0px 4px 6px -2px;
`;

const AuthPage = () => {
  const location = useLocation();
  // @ts-ignore

  return (
    <Container>
      <Layout>
        {location.pathname === PAGE.PAGE_SIGN_IN ? (
          <SignIn />
        ) : location.pathname === PAGE.PAGE_SIGN_UP ? (
          <SignUp />
        ) : undefined}
        <SideCard />
      </Layout>
    </Container>
  );
};

export default AuthPage;
