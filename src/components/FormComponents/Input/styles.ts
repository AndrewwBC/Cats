import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  margin-bottom: 8px;
  letter-spacing: .4px;
  gap: 8px;
  font-family: 'Roboto';
  font-weight: 400;
`;

export const ForgotPass = styled.div`
  margin-top: -8px;
  place-self: end;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #ff441b;
    transition: 0.3s;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 4px;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: ${({theme}) => theme.input};
  transition: 0.3s;
  &:hover {
    background-color: #fff;
  }
  &:focus {
    border: 2px solid #e1ad01;
    background-color: #fff;
  }
`;
