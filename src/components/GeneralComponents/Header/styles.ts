import styled from 'styled-components';

// const Orange = {
//   One: '#FF8E00',
//   Two: '#FF7F00',
//   Three: '#FF6702',
//   Four: '#FF6702',
//   Five: '#E54818',
// };

export const Container = styled.header`
  max-width: 100%;
  background-color: #f9f9f9;
  box-shadow: inset 0px 0px 1px black;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  padding: 12px 0px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: block;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-items: center;
`;
