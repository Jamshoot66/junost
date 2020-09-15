import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-blend-mode: color;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark}55;
  backdrop-filter: blur(3px) grayscale(80%);
  top: 0;
  left: 0;
  position: absolute;
`;

export const PopupContainer = styled.section`
  position: relative;
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow-y: auto;
  max-height: 100%;
`;

const line = `
  width: 100%;
  height: 2px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 0;
  content: "";
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  margin: 10px;
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
