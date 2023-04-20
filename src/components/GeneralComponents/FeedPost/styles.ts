import styled from 'styled-components';
import {motion as m } from 'framer-motion'

export const Container = styled(m.section)`
  max-width: 800px;
  height: 100%;
  margin-top: 120px;
`;

export const Content = styled.div`
  display: grid;
  background-color: #f9f9f9;
  border-radius: 8px;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-bottom: 24px;
`;

export const PostInteraction = styled.div`
  display: grid;
  grid-template-rows: auto 2fr auto auto;
  max-width: 100%;
  max-height: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px solid black;
  padding: 16px;
  gap: 12px;
  background-color: ${({ theme }) => theme.feedBg};
`;
export const Image = styled.img`
  width: 100%;
  height: 32rem;
  display: block;
  object-fit: cover;
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
  border-radius: 8px;
`;
export const User = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  letter-spacing: 0.1px;
  opacity: 0.7;
  color: ${({ theme }) => theme.postInterText};
`;

export const InputComment = styled.input`
  background-color: transparent;
  padding: 12px 4px;
  border-radius: 4px;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.postInterText};
  }
`;
