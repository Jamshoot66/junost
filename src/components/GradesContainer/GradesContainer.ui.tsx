import styled from "styled-components";
import is from "typescript-styled-is";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

interface GradeContainerProps {
  isCollapsed?: boolean;
}

export const GradeContainer = styled.div<GradeContainerProps>`
  position: relative;
  display: flex;
  padding: 50px 0;
  max-height: 100vh;
  transition: 0.25s ease;

  ${is("isCollapsed")`
    max-height: 200px;
    overflow: hidden;
    
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 30%;
      bottom: 0;
      left: 0;
      background: linear-gradient(to top, #fff 40%, rgba(255, 255, 255, 0));
    }
  `}
`;

export const TitleContainer = styled.div``;

export const Title = styled.header`
  font-weight: bold;
  font-size: 2rem;

  margin: 47px 37px 24px 0;
  padding: 7px 7px 7px 0;
  display: flex;
  align-items: center;
`;

export const AddMoreButton = styled.a`
  margin-top: auto;
  position: relative;
  padding: 9px 12px;
  border-radius: 3px;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
`;

export const SingleGradeContainer = styled.div`
  width: 395px;
  margin-right: 35px;
`;

export const PlusIcon = styled.div`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VerticalPlaceholder = styled.div`
  height: 20px;
`;
