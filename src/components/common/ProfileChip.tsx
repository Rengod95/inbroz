import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Permission_E } from "../../Model";
import { PAGE } from "../../API/ENDPOINT";

import { useRecoilValue, useResetRecoilState } from "recoil";
import { Auth } from "../../Recoil";

import { Avatar, Chip, styled } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Theme from "../../Styles/theme";
import { handlePermissionCallback } from "../../Utils/auth";

interface ChipProps {
  avatar: ReactElement;
  permission: Permission_E;
  label: string;
  variant: "outlined" | "filled" | undefined;
  onClick: () => void;
}

interface AvatarProps {
  permission: Permission_E;
}

// const handlePermissionCallback = (
//   permission: Permission_E,
//   AdminCallBack?: (...args: any) => any,
//   UserCallBack?: (...args: any) => any,
//   UnknownCallback?: (...args: any) => any
// ) => {
//   if (permission === Permission_E.Admin) {
//     if (AdminCallBack!!) {
//       AdminCallBack();
//     }
//   }
//
//   if (permission === Permission_E.User) {
//     if (UserCallBack!!) {
//       UserCallBack();
//     }
//   }
//
//   if (UnknownCallback!!) {
//     UnknownCallback();
//   }
// };

const StyledChip = styled(Chip)<ChipProps>(({ theme, permission }) => {
  const chip_color = handlePermissionCallback(
    permission,
    () => theme.palette.error.main,
    () => theme.palette.success.main,
    () => theme.palette.text.disabled
  );

  return `
      color: ${chip_color};
      border: 1px solid ${chip_color};
      minWidth: "70px";`;
});

const StyledAvatar = styled(Avatar)<AvatarProps>(({ theme, permission }) => {
  const avatar_color = handlePermissionCallback(
    permission,
    () => theme.palette.error.main,
    () => theme.palette.success.main,
    () => theme.palette.text.disabled
  );

  return `
    color:${avatar_color};
    background-color:${avatar_color};
  `;
});

const ProfileChip = () => {
  const [label, setLabel] = useState("");
  const user = useRecoilValue(Auth);
  const logout = useResetRecoilState(Auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.permission === Permission_E.UnKnown) {
      setLabel(() => "로그인");
    } else {
      setLabel(() => `"${user.name}"님 환영합니다`);
    }
  }, [user]);

  const clickHandler = () => {
    if (user.permission === Permission_E.UnKnown) navigate(PAGE.PAGE_SIGN_IN);
    else logout();
  };

  console.log(user.permission);

  return (
    <StyledChip
      permission={user.permission}
      avatar={
        <StyledAvatar permission={user.permission}>
          <LockOutlinedIcon fontSize={"small"} sx={{ color: "#fff" }} />
        </StyledAvatar>
      }
      label={label}
      variant={"outlined"}
      onClick={clickHandler}
    />
  );
};

export default ProfileChip;
