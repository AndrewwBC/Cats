import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1000px;
  height: 100%;
  margin: 2rem auto;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.background};
`;
