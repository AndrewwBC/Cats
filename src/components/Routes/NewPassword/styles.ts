import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  @media (max-width:768px){
    padding: 24px;
  }
`;

export const Form = styled.form`
  background-color: ${({theme}) => theme.form};
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 12px 18px;
  align-items: center;
  justify-content: center;
`