import { Button } from "@mui/material";
import React from "react";
import { styled as Mstyled } from "@mui/material/styles";
import styled from "@emotion/styled";

interface StyledButtonProps {
  onClick?: any;
  children?: any;
  disabled?: boolean;
  width?: string;
  height?: string;
  startIcon?: any;
  fontSize?: string;
  variant?: "text" | "outlined" | "contained" | undefined;
}

const StyledButtonContainer = styled.div`
  display: flex;
  width: inherit;
  height: inherit;
  justify-content: center;
  align-items: center;
`;

const StyledMuiButton = Mstyled(Button)<StyledButtonProps>(
  ({ theme, width, height, fontSize }) => `
    background-color: ${theme.palette.primary.main};
    font-size: inherit;
    font-weight: ${fontSize}
    color: "#fff";
    box-shadow: 10;
    width:${width};
    height:${height};
    
    &:hover{
    background-color: ${theme.palette.success.main};
    }
`
);

const StyledButton = ({
  onClick = undefined,
  children,
  disabled = false,
  width = "200px",
  height = "80px",
  fontSize = "24px",
  startIcon,
  variant = "contained",
}: StyledButtonProps) => {
  return (
    <StyledButtonContainer>
      <StyledMuiButton
        onClick={onClick}
        disabled={disabled}
        startIcon={startIcon}
        variant={variant}
        width={width}
        height={height}
      >
        {children}
      </StyledMuiButton>
    </StyledButtonContainer>
  );
};

export default StyledButton;
