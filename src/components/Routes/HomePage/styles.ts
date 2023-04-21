import styled from 'styled-components';
import {motion as m } from 'framer-motion'

export const Main = styled(m.main)`
  background-color: ${({ theme }) => theme.background};
  padding-bottom: 140px;
  padding-top: 60px;
  @media (max-width: 768px) {
    margin: 40px 0px 148px;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px 200px;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Intro = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  flex-wrap: wrap;
  flex-direction: column;
  grid-column: 1/4;
  grid-row: 1/3;
  gap: 24px;
  text-align: center;
`;

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const IntroButtons = styled.div`
  display: flex;
  place-self: center;
  align-self: end;
  gap: 12px;
  margin-top: 38px;
  align-items: center;
`;

export const Access = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 200;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 4/-1;
  grid-row: 4;
  padding: 24px;
  align-items: center;
  justify-content: center;
  gap: 24px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.9);
`;

export const InfosText = styled.p`
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  &::before {
    content: ' ';
    position: absolute;
    left: -24px;
    width: 8px;
    height: 12px;
    border-radius: 4px;
    background-color: #fF7045;
  }
  &::after {
    content: ' ';
    position: absolute;
    width: 14px;
    right: -24px;
    height: 12px;
    border-radius: 4px;
    background-color: #fF7045;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 535px) {
    font-size: 1rem;
  }
`;

export const ImgContainer = styled.img`
  border-radius: 12px;
  justify-self: center;
  place-self: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
