import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid transparent;
  background-color: #ff8e00;
  color: #202020;
  font-size: 18px;
  padding: 6px 24px;
  cursor: pointer;
  border-radius: 4px;
  letter-spacing: 0.2px;
  font-family: 'Poppins';

  &:hover {
    background-color: #ff7f00;
  }
  &:focus {
    border: 2px solid #e54818;
  }
`;
