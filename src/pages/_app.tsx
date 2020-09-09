import { AppProps } from "next/app";
import React from "react";
import "assets/styles/global.scss";

function AppContainer({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default AppContainer;
