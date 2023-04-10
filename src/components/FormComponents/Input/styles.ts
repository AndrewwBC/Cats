import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  gap: 6px;
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
  padding: 8px 24px 8px 12px;
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
