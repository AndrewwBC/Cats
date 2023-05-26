import styled from 'styled-components';
import {motion as m } from 'framer-motion'

export const Container = styled(m.main)`
  height: calc(100vh - 143px);
  padding-top: 120px;
  background-color: ${({ theme }) => theme.background};
  @media (max-width:768px){
    padding: 120px 24px;
    height: calc(100vh - 122px);
  }
`;

export const Content = styled.article`
  max-width: 460px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
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

export const Form = styled.form`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
`