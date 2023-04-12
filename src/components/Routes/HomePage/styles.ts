import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.background};
  padding-bottom: 140px;
  padding-top: 60px;
  @media (max-width: 768px) {
    margin: 40px 0px 148px;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Intro = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  text-align: center;
`;

export const ImgContainer = styled.img`
  border-radius: 12px;
  justify-self: center;
  place-self: center;
  margin-bottom: 24px;
  border-radius: 12px;
  @media (max-width: 768px) {
    object-fit: cover;
    width: 400px;
    height: 340px;
  }
  @media (max-width: 535px) {
    object-fit: cover;
    width: 300px;
    height: 260px;
  }
`;
