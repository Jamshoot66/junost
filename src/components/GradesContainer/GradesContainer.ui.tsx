import styled from "styled-components";
import is from "typescript-styled-is";
import { Collapsable } from "./GradesContainer.types";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const GradeContainer = styled.div<Collapsable>`
  position: relative;
  display: flex;
  margin: 50px 0;
  max-height: 1000vh;
  will-change: contents, height, max-height;
  transition: 0.25s ease;

  &:after {
    content: "";
    position: absolute;
    display: none;
    opacity: 0;
    width: 100%;
    height: 65%;
    bottom: 0;
    left: 0;
    pointer-events: visible;
    background: linear-gradient(to top, #fff 20%, rgba(255, 255, 255, 0));
  }

  ${is("isCollapsed")`
    max-height: 120px;
    overflow: hidden;
    
    &:after {
      content: "";
      position: absolute;
      display: block;
      opacity: 1;
    }
  `}
`;

export const TitleContainer = styled.div``;

export const Title = styled.header<Collapsable>`
  font-weight: bold;
  font-size: 2rem;

  margin: 47px 37px 0 0;
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  cursor: pointer;

  transition: 0.25s ease;
  transform: translateY(0);
  will-change: transform;

  ${is("isCollapsed")`
    transform: translateY(-30px);
  `}
`;

export const AddMoreButton = styled.a`
  margin-top: auto;
  display: inline-block;
  position: relative;
  padding: 9px 12px;
  border-radius: 3px;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
`;

export const SingleGradeContainer = styled.div<Collapsable>`
  width: 395px;
  margin-right: 35px;

  transition: 0.25s ease;
  transform: translateY(0);
  will-change: transform;

  ${is("isCollapsed")`
    transform: translateY(-30px);
  `}
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
