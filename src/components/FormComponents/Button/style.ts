import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid transparent;
  background-color: ${({ theme }) => theme.button};
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
  @media (max-width: 768px){
    padding: 6px 18px;
    }
    @media (max-width: 600px){
    padding: 4px 12px;
    }
    @media (max-width: 400px){
    padding: 4px 10px;
    font-size: 12px;
    }
`;
