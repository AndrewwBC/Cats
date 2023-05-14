import styled, { keyframes } from "styled-components";

export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerImage = styled.img`
  animation: ${rotateAnimation} 1s linear infinite;
  width: 60px;
  height: 60px;
  border-radius: 99999px;
`;