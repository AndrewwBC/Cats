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
  border-bottom: 1px solid #fb1;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  padding: 12px 0;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px){
        padding: 24px;
    }
`;

export const Logo = styled.div`
  display: block;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-items: center;
`;
