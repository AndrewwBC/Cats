import styled from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.background};
  height: calc(100vh - 138px);
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.form};
`;
