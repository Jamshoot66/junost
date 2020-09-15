import React from "react";
import About from "popups/About";
import * as UI from "./AboutSkill.ui";

interface Props {}

function AboutSkill(props: Props): React.ReactNode {
  // return <About header={<Header />} content={<ContentComponent />} />;
  return (
    <About
      header={<UI.HeaderComponent caption={"test"} isMastered={true} />}
      content={<UI.ContentComponent description={"test descr"} />}
    />
  );
}

export default AboutSkill;

/*
    <UI.Container>
      <UI.HeaderContainer>
        <UI.Header>{header}</UI.Header>
        {masterable && (
          <UI.MasteredButton isMastered={isMastered || false}>
            Я это знаю
          </UI.MasteredButton>
        )}
      </UI.HeaderContainer>
      <br />
      <UI.ContentComponent>{content}</UI.ContentComponent>
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
 */
