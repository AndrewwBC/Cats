import styled from 'styled-components';
import {motion as m } from 'framer-motion'

export const Container = styled(m.section)`
  display: flex;
  height: calc(100vh - 132px);
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  @media (max-width: 768px) {
    height: calc(100vh - 130px);
    margin: 0px 24px;
  }
  @media (max-width: 500px) {
    height: calc(100vh - 120px);
    margin: 0px 12px;
  }
`;

export const RegisterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 24px;
  gap: 12px;
  @media (max-width: 768px){
    padding: 32px;
  }
  @media (max-width: 768px){
    padding: 12px;
  }
`

export const Content = styled.article`
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: center;
`;

export const CatImg = styled.img`
  display: block;
  object-fit: cover;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  @media (max-width: 768px) {
    display: none;
  }
`;


export const InputGridPosition = styled.div`
  grid-column: 1/1;
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

export const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: ${({theme}) => theme.form};
  padding: 24px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  gap: 12px;
`
