import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 100%;
  background-color: ${({ theme }) => theme.footer};
  padding: 1.2rem 0px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CopyRights = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.footerText};
  font-family: 'Poppins';
`;
