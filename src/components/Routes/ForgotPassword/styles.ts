import styled from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.background};
  margin-bottom: 54px;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
