import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  max-width: 42rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Arrow = styled.img`
  display: block;
  border-radius: 6px;
  color: black;
  background-color: #f9f9f9;
  transition: 0.5s;
  cursor: pointer;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const Animate = keyframes`
  from{
    transform: translate3d(0,-20px,0);
  
  } to{
    transform: translate3d(0,0,0);
  }

`;

export const DropDown = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  animation: ${Animate} ease-in-out 0.5s;
  grid-column: 1/-1;
`;

export const InputFile = styled.input`
  margin-right: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  grid-column: 1/-1;
`;

export const DropFiles = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 6rem;
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed #555;
  color: #444;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
  &:hover {
    background: #eee;
    border-color: #111;
    color: #111;
  }
`;
