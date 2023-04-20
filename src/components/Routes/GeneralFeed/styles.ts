import styled from 'styled-components';
import {motion as m } from 'framer-motion'

export const Container = styled(m.main)`
  height: 100%;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.feedBg};
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.feedBg};
`;
