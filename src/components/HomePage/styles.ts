import styled from 'styled-components';

export const Main = styled.main`
  background-color: #f9f9f9;
  margin-bottom: 140px;
  padding-top: 60px;
`;

export const Content = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

export const Intro = styled.article`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
`;

export const ImgContainer = styled.img`
  border-radius: 12px;
  justify-self: center;
  place-self: center;
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: 7px 7px 14px #e3e3e3, -7px -7px 14px #ffffff;
`;
