import React from "react";
import { Container, TitleContainer, Title } from "./PageHeader.ui";

function PageHeader() {
  return (
    <Container>
      <TitleContainer>
        <Title>Джуность</Title>
        <div id="fb-root" />
        <div
          data-href="https://anmedio.github.io/grades/"
          data-width=""
          data-layout="button_count"
          data-action="like"
          data-size="small"
          data-show-faces="true"
          data-share="false"
        />
      </TitleContainer>
    </Container>
  );
}

export default PageHeader;
