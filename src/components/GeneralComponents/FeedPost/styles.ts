import styled from 'styled-components';
import {motion as m } from 'framer-motion'

export const Container = styled(m.section)`
  height: 100%;
  @media (max-width: 600px){
    padding-bottom: 48px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-bottom: 32px;
  @media (max-width: 600px){
    padding: 12px;
  }
`;

export const PostInteraction = styled.div`
  display: grid;
  grid-template-rows: auto 2fr auto auto;
  padding: 18px;
  gap: 12px;
  background-color: ${({ theme }) => theme.feedBg};
  @media (max-width:768px){
    gap: 4px;
    padding: 12px 18px;
  }
`;
export const Image = styled.img`
  width: 480px;
  height: 400px;
  display: block;
  object-fit: cover;
  object-position: 50%;
  max-height: 100%;
  @media (max-width:768px){
  max-width: 100%;
  height: 500px;
  }
`;

export const UserNameDescription = styled.div`
  border-radius: 8px;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 8px 4px;
  align-items: center;
  gap: 12px;
  color: #222;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.postInterText};
  line-break: anywhere;
  @media (max-width: 500px){
    font-size: 14px;
  }
`;
export const User = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  letter-spacing: 0.1px;
  opacity: 0.7;
  color: ${({ theme }) => theme.postInterText};
  @media (max-width:500px){
     font-size: 12px;
  }
`;

export const LikeText= styled.p`
  font-family: 'Poppins';
  font-size: 14px;
  margin-top: 18px;
  margin-left: 4px;
  color: ${({theme}) => theme.text};
  @media (max-width:500px){
     font-size: 12px;
     margin-top: 14px;
  }
`
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
