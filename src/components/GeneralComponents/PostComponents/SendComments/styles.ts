import styled from "styled-components";

export const SendCommentDiv = styled.div`
  display: flex;
`

export const SendCommentButton = styled.button`
  background-color: ${({ theme }) => theme.background};
  font-family: 'Poppins';
  padding: 12px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  &:hover{
    color: #e9e9e9;
  }

`

export const InputComment = styled.input`
  background-color: ${({ theme }) => theme.background};
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-grow: 1;
  border: none;
  color: ${({ theme }) => theme.text};
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;