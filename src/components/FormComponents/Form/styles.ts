import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const FormBody = styled.form`
  width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 64px;
  background-color: #f9f9f9;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: #f9f9f9;
  box-shadow: 9px 9px 18px #d4d4d4, -9px -9px 18px #ffffff;
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
