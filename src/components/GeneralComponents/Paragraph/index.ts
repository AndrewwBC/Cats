import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: ${(props) => props.itemProp};
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 535px) {
    font-size: 1rem;
  }
`;
