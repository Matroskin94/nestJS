import { ITheme } from "@appTypes/styles";
import * as colors from "./colors";

export const DARK_THEME: ITheme = {
  colors: {
    text: {
      primary: colors.TEXT_DARK,
      secondary: colors.TEXT_SECONDARY_DARK,
      highlighted: colors.TEXT_HIGHLIGHT_DARK
    },
    button: {
      primary: colors.BUTTON_PRIMARY_DARK,
      secondary: colors.BUTTON_SECONDARY_DARK
    },
    background: {
      primary: colors.MAIN_DARK,
    }
  },
}

export const LIGHT_THEME: ITheme = {
  colors: {
    text: {
      primary: colors.TEXT_LIGHT,
      secondary: colors.TEXT_SECONDARY_LIGHT,
      highlighted: colors.TEXT_HIGHLIGHT_LIGHT
    },
    button: {
      primary: colors.BUTTON_PRIMARY_LIGHT,
      secondary: colors.BUTTON_SECONDARY_LIGHT
    },
    background: {
      primary: colors.MAIN_LIGHT,
    }
  },
}