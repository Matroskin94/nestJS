import "../styles/globals.css";
import type { AppProps } from "next/app";

import { createGlobalStyle } from "styled-components";
import { ITheme } from "@appTypes/styles";
import { ThemeWrapper } from "@components/ThemeWrapper/ThemeWrapper";
import { Layout } from "@components/Layout/Layout";

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
    <ThemeWrapper>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeWrapper>
  );
}

export default MyApp;
