import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 6px;
  font-family: 'Poppins';
`;

export const StyledInput = styled.input`
  padding: 12px 24px 12px 6px;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #e9e9e9;
  transition: 0.3s;
  &:active {
    border: none;
  }
  &:hover {
    background-color: #fff;
  }
  &:focus {
    border: 2px solid #e54818;
    background-color: #fff;
  }
`;
