import styled, { keyframes } from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.header};
  box-shadow: ${({ theme }) => theme.shadowHeader};
  backdrop-filter: blur( 4.5px );
  -webkit-backdrop-filter: blur( 4.5px );
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px 0px;
  @media (max-width: 620px){
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-content: center;
  }
`;

export const Menu = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 48px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px){
    padding: 0px 24px;
  }
  @media (max-width: 620px){
    display: none;
  }

`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;
`
export const MobileLogo = styled.div`
  display: none;
  margin-left: 16px;
  @media (max-width: 620px){
    display: inline-block;
  }
`

export const MobileMenuButton = styled.div`
  float: right;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  width: 36px;
  height: 4px;
  background-color: ${({theme}) => theme.text};
  transition: .3s;
  margin-right: 24px;
  display: none;
  rotate: ${props => props.itemScope ? "calc(45deg)" : "calc(0deg)"};
  @media (max-width: 620px){
    display: block;
  }
  &::before{
    content: '';
    position: absolute;
    width: 36px;
    height: 4px;
    transition: .3s;
    top: -8px;
    border-radius: 4px;
    background-color: inherit;
    rotate: calc(-45deg);
    rotate: ${props => props.itemScope ? "calc(90deg)" : "calc(0deg)"};
    margin-top: ${props => props.itemScope ? "8px" : "0px"};
  }
  &::after {
    content: '';
    position: absolute;
    width: 36px;
    height: 4px;
    transition: .3s;
    top: 8px;
    border-radius: 4px;
    background-color: inherit;
    display: ${props => props.itemScope ? "none" : "block"};
  }
`
export const MobileMenuNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  transition: .3s;
  margin-top: 12px;
  grid-column: 1/-1;
  display: ${props => props.itemScope ? 'block' : 'none'}
`
export const MobileMenuList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;

`

export const MobileMenuOptions = styled.li`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.text};
  position: relative;
  padding: 8px;
  background-color: ${({theme}) => theme.mobileButton};
  border-radius: 8px;
`