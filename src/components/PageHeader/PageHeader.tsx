import React from "react";
import FacebookLike from "components/FacebookLike";
import {
  Container,
  TitleContainer,
  Title,
  DescriptionContainer,
  Description,
  Buttons,
  About,
  HowItWorks,
  GitLink,
} from "./PageHeader.ui";

function PageHeader(): React.ReactElement {
  return (
    <Container>
      <TitleContainer>
        <Title>Джуность</Title>
        <FacebookLike />
      </TitleContainer>
      <DescriptionContainer>
        <Description>
          Объективные грейды для развития специалистов сферы digital,
          предложенные и развиваемые профессиональным сообществом.
        </Description>
        <Buttons>
          {/* TODO: Add about popup and HowItWorks logic */}
          <About>О проекте</About>
          <HowItWorks>Как это работает?</HowItWorks>
        </Buttons>
      </DescriptionContainer>
      <GitLink />
    </Container>
  );
}

export default PageHeader;
