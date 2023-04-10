import styled from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  transition: 1s;
`;

export const Content = styled.article`
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const TwoInputsInline = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
`;

export const OneInputInline = styled.div`
  display: flex;
  grid-column: 1/-1;
`;
