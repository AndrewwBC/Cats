import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  margin-bottom: 8px;
  gap: 2px;
  font-family: 'Poppins';
`;

export const ForgotPassword = styled.a`
  color: #e54818;
  margin-top: -6px;
  place-self: end;
  font-size: 1rem;
  font-family: 'Roboto';
  cursor: pointer;
  &:hover {
    color: #ff551b;
    transition: 0.3s;
  }
`;

export const StyledInput = styled.input`
  padding: 7px 16px 5px 4px;
  margin-bottom: 4px;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #e9e9e9;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
  }
  &:focus {
    border: 2px solid #ff6702;
    background-color: #fff;
  }
`;
