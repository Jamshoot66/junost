import React from "react";
import * as UI from "./AboutSkill.ui";

type Link = {
  label: string;
  href: string;
};

interface Props {
  header: string;
  description: string;
  isMastered: boolean;
  links: Link[];
}

function AboutSkill({
  header,
  description,
  isMastered,
  links,
}: Props): React.ReactElement {
  return (
    <UI.Container>
      <UI.HeaderContainer>
        <UI.Header>{header}</UI.Header>
        <UI.MasteredButton isMastered={isMastered}>
          Я это знаю
        </UI.MasteredButton>
      </UI.HeaderContainer>
      <br />
      <UI.Description>{description}</UI.Description>
      <UI.LinksContainer>
        <UI.LinksHeader>Ссылки на материалы</UI.LinksHeader>
        <UI.LinksList>
          {links?.map(link => (
            <UI.Link
              href={link.href}
              target="_blank"
              key={`${link.label}_${link.href}`}
            >
              {link.label}
              <UI.LinkIcon />
            </UI.Link>
          ))}
        </UI.LinksList>
      </UI.LinksContainer>
    </UI.Container>
  );
}

export default AboutSkill;
