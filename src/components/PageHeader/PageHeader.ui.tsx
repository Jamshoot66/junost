import React from "react";
import styled from "styled-components";

export const Container = styled.header`
  padding: 31px 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.sizes.md}) {
    padding: 50px 0 55px;
  }
`;

export const TitleContainer = styled.header`
  outline: 1px solid #f00;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 27px;
  color: ${({ theme }) => theme.colors.primary};
`;
