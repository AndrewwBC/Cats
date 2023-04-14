import styled from 'styled-components';

export const Container = styled.section`
  max-width: 800px;
  height: 100%;
  margin-top: 120px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  width: 100%;
  height: 32rem;
  display: block;
  object-fit: cover;
`;

export const Description = styled.div`
  background-color: ${({ theme }) => theme.text};
  padding: 16px;
  color: ${({ theme }) => theme.background};
  border-radius: 8px;
`;

export const PostInteraction = styled.div`
  display: grid;
  grid-template-rows: auto 2fr auto auto;
  max-height: 100%;
  padding: 16px;
  gap: 12px;
`;

export const User = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 4px 2px;
  align-items: center;
  gap: 12px 0px;
  color: #222;
`;
