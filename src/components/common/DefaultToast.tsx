import React, { Key } from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { Toast_I } from "../../Model";

interface ToastProps extends Toast_I {
  open: boolean;
  duration?: number;
  checkOut?: string;
}

const DefaultToast = ({
  title,
  message,
  callBack,
  type,
  open,
  duration = 3000,
  checkOut,
}: ToastProps) => {
  console.log(title, type, message);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={duration}
      open={open}
      key={message as Key}
      onClose={callBack}
    >
      <Alert variant={"filled"} severity={type} onClose={callBack}>
        <AlertTitle>{title}</AlertTitle>
        <p> {message}</p>
        <strong>{checkOut}</strong>
      </Alert>
    </Snackbar>
  );
};

export default DefaultToast;
