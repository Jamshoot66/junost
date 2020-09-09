import React from "react";
import styled from "styled-components";
import GitIcon from "./logo.svg";

export const Container = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 65px 0 75px;

  @media (max-width: ${({ theme }) => theme.sizes.md}) {
    padding: 50px 0 55px;
  }
`;

export const TitleContainer = styled.header`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 27px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 385px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.greyText};
  font-size: 1.4rem;
  margin-bottom: 15px;
`;

export const Buttons = styled.div``;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px dashed;
  margin-right: 20px;
`;

export const About = styled(Button)``;

export const HowItWorks = styled(Button)``;

const Link = styled.a``;

const Icon = styled.img``;

export const GitLink = (): React.ReactElement => (
  <Link href="https://github.com/anmedio/junost">
    <Icon src={GitIcon} />
  </Link>
);
