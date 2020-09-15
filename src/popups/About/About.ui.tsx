import styled from "styled-components";

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

export const Content = styled.div``;
