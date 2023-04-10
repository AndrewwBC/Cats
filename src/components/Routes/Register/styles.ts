import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.article`
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-items: center;
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
