import styled from 'styled-components';

// const Orange = {
//   One: '#FF8E00',
//   Two: '#FF7F00',
//   Three: '#FF6702',
//   Four: '#FF6702',
//   Five: '#E54818',
// };

export const Container = styled.header`
  background-color: ${({ theme }) => theme.header};
  box-shadow: ${({ theme }) => theme.shadowHeader};
  backdrop-filter: blur( 4.5px );
  -webkit-backdrop-filter: blur( 4.5px );
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 18px 0px;
  gap: 128px;
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

export const Menu = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding-right: 92px;
  gap: 48px;
  align-items: center;
  justify-content: center;

`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;
`