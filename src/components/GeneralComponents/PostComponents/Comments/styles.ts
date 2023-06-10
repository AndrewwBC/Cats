import styled from 'styled-components';

export const Container = styled.div`
  padding: 6px;
  border-radius: 8px;
  color: black;
`;


export const EachComment = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px){
    font-size: 14px;
  }
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
`;
