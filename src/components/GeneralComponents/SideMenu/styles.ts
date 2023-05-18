import styled from "styled-components";

export const SideContent = styled.nav`
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    : .3s;
    z-index: 10;
    background-color: ${({ theme }) => theme.sideMenu};
    width: 48px;
    @media (min-width: 769px){
        &:hover{
        width: 280px;
        }
    }
    @media (max-width:768px){
        height: 60px;
        width: 100%;
        left: auto;
        right: auto;
        top: auto;
        bottom: 0;
   
    }
`

export const TitleButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow: hidden;
    visibility: hidden;
    gap: 18px;
    margin-top: 44px;
    margin-bottom: 60px;       
    ${SideContent}:hover &{
        margin-left: 40px;
        visibility: visible;   
        : .5s;
    }
    @media (max-width:768px){
        display: none;
    }
`

export const IconsContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    flex-wrap: wrap;
    align-items: start;
    border-radius: 4px;
    flex-grow: 1;
    gap: 32px;
    overflow: hidden;
    margin: 0 auto;
    @media (max-width:768px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    @media (max-width:500px){
        gap: 18px;
        padding: 0px 18px;
    }
`

export const IconAndTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-grow: 1;
    padding: 12px;
    border-bottom: 1px solid rgba(0,0,0,0);
    &:hover{
        border-bottom: 1px solid #fb1;
        : 1s;
    }
`

export const IconTitle = styled.p`
    font-family: 'Poppins';
    font-size: 16px;
    @media (max-width:768px){
        display: none;
    }
`

export const Icon = styled.img`
`
export const Modal = styled.div`
    display: none;
    @media (max-width:500px){
        display: block;
    }
`






