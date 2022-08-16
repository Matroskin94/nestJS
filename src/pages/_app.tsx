import "../styles/globals.css";
import type { AppProps } from "next/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ITheme } from "@appTypes/styles";
import { DARK_THEME, LIGHT_THEME } from "src/constants/styles/theme";

// //** color: ${({ theme }) => theme.text};
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: { theme: ITheme }) =>
      theme.colors.background.primary};
    color: ${({ theme }: { theme: ITheme }) => theme.colors.text.primary};
    font-family: SpaceGrotesk, sans-serif;
    transition: all 0.50s linear;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
