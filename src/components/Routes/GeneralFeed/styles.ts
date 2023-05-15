import styled from 'styled-components';
import {motion as m } from 'framer-motion'

export const Container = styled(m.main)`
  height: 100%;
  padding-top: 60px;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

`;
