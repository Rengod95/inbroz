import React, { useState } from "react";
import { Toast_Types } from "../Model";

const useToast = () => {
  const [toastTitle, setToastTitle] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastType, setToastType] = useState<Toast_Types>("info");
  const [toastIsOpen, setToastIsOpen] = useState<boolean>(false);

  const reverseToastOpenState = () => {
    setToastIsOpen((prev) => !prev);
  };

  const changeToastTitle = (title: string): void => {
    setToastTitle((prev) => title);
  };
  const changeToastMessage = (Message: string): void => {
    setToastMessage((prev) => Message);
  };
  const changeToastType = (type: Toast_Types): void => {
    setToastType((prev) => type);
  };

  const closeToast = () => {
    setToastIsOpen(false);
  };

  const openToast = () => {
    setToastIsOpen(true);
  };

  return {
    handlers: {
      reverseToastOpenState,
      changeToastMessage,
      changeToastTitle,
      changeToastType,
      closeToast,
      openToast,
    },
    states: {
      toastTitle,
      toastIsOpen,
      toastMessage,
      toastType,
    },
  };
};

export default useToast;
