import React from "react";
import * as UI from "./About.ui";

interface Props {
  header: React.ReactNode;
  content: React.ReactNode;
}

function About({ header, content }: Props): React.ReactElement {
  return (
    <UI.Container>
      <UI.HeaderContainer>
        <UI.Header>{header}</UI.Header>
      </UI.HeaderContainer>
      <br />
      <UI.Content>{content}</UI.Content>
    </UI.Container>
  );
}

export default About;
