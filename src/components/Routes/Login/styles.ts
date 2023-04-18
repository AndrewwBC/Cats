import styled from 'styled-components';
import {motion as m } from 'framer-motion'

export const Container = styled(m.main)`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 52px;
  background-color: ${({ theme }) => theme.background};
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
