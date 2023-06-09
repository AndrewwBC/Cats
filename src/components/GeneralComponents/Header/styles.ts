import styled from 'styled-components';

// const Orange = {
//   One: '#FF8E00',
//   Two: '#FF7F00',
//   Three: '#FF6702',
//   Four: '#FF6702',
//   Five: '#E54818',
// };

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  padding: 12px;
  gap: 128px;
  align-items: center;
  grid-template-columns: 1fr auto auto;
  justify-content: center;
  @media (max-width: 1115px){
    padding-left: 24px;
    }
  @media (max-width: 768px){
    padding: 24px;
    padding-left: 48px;
    gap: 32px;
    }
    @media (max-width: 500px){
    padding: 8px 16px;
    }
    
`;

export const Logo = styled.div`
  display: block;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-items: self-end;

`;
