import styled from "styled-components";
import is from "typescript-styled-is";
import LinkIconImage from "./link.svg";

export const Container = styled.section`
  width: 430px;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.header`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  padding-bottom: 13px;
  margin-bottom: 17px;
  position: relative;
  padding-right: 25px;
`;

export const Header = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

type Masterable = {
  isMastered: boolean;
};

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
  border: 1px solid ${({ theme }) => theme.colors.primary};
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
