import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem;
  height: calc(100vh - 180px);
  display: flex;
  align-items: center;
`;

export const FormBody = styled.form`
  max-width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 72px 42px;
  background-color: #f9f9f9;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 9px 9px 18px ${({ theme }) => theme.background}, -9px -9px 18px ${({ theme }) => theme.background};
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
