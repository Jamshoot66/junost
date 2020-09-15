import React from "react";
import styled from "styled-components";
import is from "typescript-styled-is";
import { Masterable, HeaderProps, ContentProps } from "./AboutSkill.types";
import LinkIconImage from "./link.svg";

export const Container = styled.section`
  width: 430px;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.header`
  display: flex;
`;

export const Header = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

export const MasteredButton = styled.button<Masterable>`
  position: relative;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;

  border-radius: 3px;
  padding: 8px 12px 9px;
  line-height: 1;
  margin-left: 10px;
  white-space: nowrap;

  background-color: ${({ theme }) => theme.colors.grey};

  ${is("isMastered")`
    background-color: ${({ theme }) => theme.colors.yellow};
  `}
`;

export const Description = styled.div`
  margin-bottom: 30px;
  font-size: 1.4rem;
`;

export const LinksContainer = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const LinksHeader = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 19px;
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 6px 12px;
  line-height: 1;
  margin-bottom: 15px;
`;

export const LinkIcon = styled.div`
  background: url(${LinkIconImage});
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 10px;
`;

export const HeaderComponent = ({ caption, isMastered }: HeaderProps) => (
  <HeaderContainer>
    <Header>{caption}</Header>
    <MasteredButton isMastered={isMastered}>Я это знаю</MasteredButton>
  </HeaderContainer>
);

export const ContentComponent = ({
  description,
  links,
}: ContentProps): React.ReactElement => (
  <React.Fragment>
    <Description>{description}</Description>
    <LinksContainer>
      {links?.length > 0 && (
        <React.Fragment>
          <LinksHeader>Ссылки на материалы</LinksHeader>
          <LinksList>
            {links?.map(link => (
              <Link
                href={link.href}
                target="_blank"
                key={`${link.label}_${link.href}`}
              >
                {link.label}
                <LinkIcon />
              </Link>
            ))}
          </LinksList>
        </React.Fragment>
      )}
    </LinksContainer>
  </React.Fragment>
);

ContentComponent.defaultProps = {
  links: [],
};
