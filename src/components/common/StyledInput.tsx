import React, { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

import { styled } from "@mui/material";

interface StyledInputProps {
  name: string;
  type: React.HTMLInputTypeAttribute | undefined;
  width?: string;
  height?: string;
}

// name으로 라벨 설정 및 form 내부 상태 값 추적
// FormProvider와 함께 사용 가능

const StyledInput = ({ name, type, width, height }: StyledInputProps) => {
  //formState => 폼 내부의 모든 입력값에 대한 상태와 에러 등을 상태관리
  //
  const { control, formState, register } = useFormContext();
  //Form 전체의 스테이트를 담당함
  const error = formState?.errors[name];

  console.log(formState);
  const style = { ...textFieldStyle, width: width, height: height };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          label={name}
          type={type}
          variant="outlined"
          sx={style}
          error={!!error}
          helperText={error?.message as any}
          {...field}
          {...register(name)}
        />
      )}
    />
  );
};

const textFieldStyle = {
  mb: "1.5rem",
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      border: "2px solid #6c63ff",
      transition: "all 400ms ease;",
    },
  },
  "& .MuiOutlinedLabel-root.Mui-focused": {
    color: "rgb(0,176,131)",
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "#00bf8e",
      transition: "all 400ms ease;",
    },
  },
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.4)" }, // 라벨 관리
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: "2px solid #424890",
      borderRadius: "8px",
      bgcolor: "#2e3267",
    },
    "& > input": {
      zIndex: 3, //배경 색 설정시 텍스트가 가려지는 문제 해결
      color: "#fff",
    },
  },
};
export default StyledInput;
