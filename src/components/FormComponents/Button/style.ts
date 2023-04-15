import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid transparent;
  background-color: #ff8e00;
  color: #222;
  font-size: 1rem;
  padding: 4px 24px;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Poppins';
  &:hover {
    background-color: #ff7f00;
  }
  &:focus {
    border: 2px solid #e54818;
  }
  &:disabled {
    background-color: #202020;
    color: grey;
    cursor: not-allowed;
  }
`;
