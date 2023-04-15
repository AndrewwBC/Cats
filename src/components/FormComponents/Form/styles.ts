import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const FormBody = styled.form`
  padding: ${(props) => (props.itemProp ? '0px 0px 0px 12px' : '42px 32px')};
  background-color: #f9f9f9;
  display: grid;
  gap: 12px;
  grid-template-columns: ${(props) => (props.itemProp ? '1fr 1fr' : '1fr')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-items: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.form};
  box-shadow: 9px 9px 18px ${({ theme }) => theme.background},
    -9px -9px 18px ${({ theme }) => theme.background};
  @media (max-width: 1000px) {
    max-width: 768px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
