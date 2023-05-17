import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1000px;
  height: calc(100vh - 143px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;
