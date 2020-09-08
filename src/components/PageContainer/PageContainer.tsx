import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "themes/mainTheme";

interface Props {
  children: React.ReactElement;
}

function PageContainer(props: Props) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default PageContainer;
