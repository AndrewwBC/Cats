import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Poppins';
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 535px) {
    font-size: 1.2rem;
  }
`;

export const Catgram = styled.h1`
  font-size: 2.4rem;
  grid-column: 1/-1;
  padding-bottom: 32px;
  font-family: 'Poppins';
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 535px) {
    font-size: 1.5rem;
  }
`;
