import styled from 'styled-components';
import {motion as m } from 'framer-motion'

export const Container = styled(m.section)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  left: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.2);
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, .1);
  @media (max-width: 600px){
    padding-bottom: 48px;
  }
`;

export const Content = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px){
    padding: 12px;
  }
`;

export const PostInteraction = styled.div`
  display: grid;
  align-items: start;
  grid-template-rows: 1fr auto auto auto;
  padding: 18px;
  height: 800px;
  gap: 12px;
  background-color: ${({ theme }) => theme.feedBg};
  @media (max-width:768px){
    gap: 4px;
    padding: 12px 18px;
    height: 500px;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  height: 800px;
  display: block;
  object-fit: contain;
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
  background-color: ${({ theme }) => theme.input};
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
