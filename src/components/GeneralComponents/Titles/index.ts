import styled from 'styled-components';

export const NormalTitle = styled.h1`
  font-size: 2rem;
  font-family: 'Poppins';
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.2px;
`;

export const LowTitle = styled.h2`
  font-size: 1.6rem;
  font-family: 'Poppins';
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.2px;
`;

export const Catgram = styled.h1`
  font-size: 1.8rem;
  font-family: 'Poppins';
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.2px;
  position: relative;
  z-index: 10;

`
