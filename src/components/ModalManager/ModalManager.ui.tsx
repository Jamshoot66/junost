import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-blend-mode: color;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.dark}55;
  backdrop-filter: blur(3px) grayscale(80%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContainer = styled.section`
  position: relative;
  padding: 30px 20px 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;

const line = `
  width: 100%;
  height: 1px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 0;
  content: "";
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  margin: 5px;
  position: absolute;
  top: 0;
  right: 0;

  &:after {
    ${line};
    transform: rotateZ(45deg);
  }

  &:before {
    ${line};
    transform: rotateZ(-45deg);
  }
`;
