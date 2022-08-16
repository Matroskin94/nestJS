import { DefaultTheme } from "styled-components";

interface IColor {
  primary: string;
  secondary?: string;
  highlighted?: string;
}

export interface ITheme extends DefaultTheme {
  colors: {
    text: IColor;
    button: IColor;
    background: IColor;
  }
}
