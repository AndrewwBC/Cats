import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 6px;
  font-family: 'Poppins';
`;

export const ForgotPassword = styled.a`
  color: #e54818;
  margin-top: -12px;
  place-self: end;
  font-size: 18px;
  font-family: 'Roboto';
  cursor: pointer;
  &:hover {
    color: #ff551b;
    transition: 0.3s;
  }
`;

export const StyledInput = styled.input`
  padding: 12px 24px 12px 6px;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #e9e9e9;
  &:active {
    border: none;
  }
  &:hover {
    background-color: #fff;
    transition: 0.3s;
  }
  &:focus {
    border: 2px solid #ff6702;
    background-color: #fff;
  }
`;
