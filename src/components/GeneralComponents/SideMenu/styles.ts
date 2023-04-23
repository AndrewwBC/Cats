import styled, { keyframes } from "styled-components";

export const SideContent = styled.nav`
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    transition: .5s;
    background-color: ${({ theme }) => theme.sideMenu};
    width: 48px;
    &:hover{
        width: 280px;
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
    transition: .2s;
    ${SideContent}:hover &{
        margin-left: 120px;
        visibility: visible;   
        transition: .5s;
    }
`

export const PostButton = styled.button`
    padding: 12px 24px;
    background-color: #202020;
    font-family: 'Poppins';
    color: white;
    border-radius: 6px;
    width: 100%;
`

export const IconsContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    flex-wrap: wrap;
    align-items: start;
    border-radius: 4px;
    flex-grow: 1;
    gap: 24px;
    overflow: hidden;
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
        transition: 1s;
    }
`

export const IconTile = styled.p`
    font-family: 'Poppins';
    font-size: 16px;
`

export const Icon = styled.img`
`






