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

export const PopupContainer = styled.section``;

export const CloseButton = styled.button``;
