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
    padding: 4px 18px;
    }
    @media (max-width: 640px){
    padding: 2px 12px;
    }
    @media (max-width: 640px){
    padding: 2px 8px;
    font-size: 12px;
    }
    @media (max-width: 400px){
    padding: 2px 6px;
    font-size: 10px;
    }
`;
