import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      success: string;
      warning: string;
      danger: string;
      dangerVariant: string;
      white: string;
      light: string;
      black: string;
      bg: string;
      bg1: string;
      bg2: string;
    };
    transition: { default: String };
  }
}
