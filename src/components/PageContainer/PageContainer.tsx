import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "themes/mainTheme";
import { Container } from "./PageContainer.ui";

interface Props {
  children: React.ReactElement;
}

function PageContainer(props: Props): React.ReactElement {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Container>{children}</Container>
    </ThemeProvider>
  );
}

export default PageContainer;
