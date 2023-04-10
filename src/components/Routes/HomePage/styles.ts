import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.background};
  padding-bottom: 140px;
  padding-top: 60px;
`;

export const Content = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  justify-content: center;
`;

export const Intro = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  text-align: center;
`;

export const ImgContainer = styled.img`
  border-radius: 12px;
  justify-self: center;
  place-self: center;
  border-radius: 12px;
`;
