import styled from 'styled-components';
import {motion as m } from 'framer-motion'

export const Container = styled(m.section)`
  display: flex;
  height: calc(100vh - 120px);
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  @media (max-width: 768px) {
    height: 100vh;
    margin: 24px;
  }
`;

export const Content = styled.article`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
`;

export const CatImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TwoInputsInline = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
`;

export const OneInputInline = styled.div`
  display: flex;
  grid-column: 1/-1;
`;

export const ErrorMSG = styled.span`
  font-family: 'Poppins';
  color: red;
  font-size: 16px;
  letter-spacing: 0.2px;
`;

export const BackLogin = styled.p`
  color: ${({ theme }) => theme.text};
`;
