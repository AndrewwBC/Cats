import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: ${(props) => props.itemProp};
  font-family: 'Poppins';
  font-weight: 400;
  word-wrap: wrap;
  line-height: 1px;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.text};
`;
