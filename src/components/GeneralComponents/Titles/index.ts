import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Poppins';
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.2px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 535px) {
    font-size: 1.2rem;
  }
`;

export const Catgram = styled.h1`
  font-size: 1.8rem;
  font-family: 'Poppins';
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.2px;
  position: relative;
  z-index: 10;
`;
