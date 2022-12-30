import React from "react";
import { Routes, Route } from "react-router-dom";
import { PAGE } from "../../API/ENDPOINT";
import AuthPage from "../Auth/AuthPage";
import FeedPage from "../Feed/FeedPage";
import MainPage from "../Main/MainPage";
import NotFound from "../NotFound/NotFound";

const PageRouter = () => {
  return (
    <Routes>
      <Route path={PAGE.PAGE_SIGN_IN} element={<AuthPage />} />
      <Route path={PAGE.PAGE_SIGN_UP} element={<AuthPage />} />
      <Route path={PAGE.PAGE_FEED} element={<FeedPage />} />
      <Route></Route>
      <Route path={PAGE.PAGE_MAIN} element={<MainPage />} />
      <Route path={PAGE.PAGE_NOTFOUND} element={<NotFound />} />
    </Routes>
  );
};

export default PageRouter;
