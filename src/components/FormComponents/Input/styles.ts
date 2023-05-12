import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  margin-bottom: 8px;
  gap: 8px;
  font-family: 'Poppins';
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
  background-color: #fff;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
  }
  &:focus {
    border: 2px solid #e1ad01;
    background-color: #fff;
  }
`;
