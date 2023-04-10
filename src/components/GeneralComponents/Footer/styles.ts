import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 1.2rem 0px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CopyRights = styled.p`
  font-size: 1.2rem;
  color: #f9f9f9;
  font-family: 'Poppins';
`;
