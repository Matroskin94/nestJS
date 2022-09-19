import { ITheme } from "@appTypes/styles";
import { createContext, FC, PropsWithChildren, useState } from "react";
import { LIGHT_THEME } from "src/constants/styles/theme";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext({
  theme: LIGHT_THEME,
  // eslint-disable-next-line
  changeTheme: (theme: ITheme) => {},
});

export const ThemeWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT_THEME);
  const changeTheme = (theme: ITheme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
