import { AppProps } from "next/app";
import React from "react";
import "assets/styles/global.scss";
import theme from "themes/mainTheme";
import { ThemeProvider } from "styled-components";

function AppContainer({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default AppContainer;
