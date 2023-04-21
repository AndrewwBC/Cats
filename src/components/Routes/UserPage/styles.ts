import styled from "styled-components";
import {motion as m } from 'framer-motion'

export const Container = styled.main`
    height: 100%;
    max-width: 1000px;
    margin: 32px auto 0px auto;
    border: 1px dashed red;
`

export const Content = styled.section`
    display: flex;
    flex-direction: column;
`

export const UserData = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    @media (max-width: 680px){
        flex-direction: column;
        justify-content: center;
        place-self: center;
        gap: 24px;
        margin-top: 32px;
    }
`

export const UserNamePhoto= styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    flex-shrink: 1;
    flex-wrap: wrap;
`

export const UserName = styled.p`
    font-family: 'Poppins';
    font-size: 20px;
    color: ${({theme}) => theme.text};
    @media (max-width: 768px){
        font-size: 16px;
    }
`

export const UserPhoto = styled.img`
    display: block;
    max-width: 100%;
    border-radius: 99999px;

`

export const Follow = styled.button`
    background-color: ${({theme}) => theme.button};
    border-radius: 4px;
    padding: 6px 16px;
    font-family: 'Poppins';
    font-size: 14px;
`

export const UserInfo = styled.nav`
    display: flex;
    gap: 32px;
    place-items: end;
`

export const NumbersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`   

export const Numbers = styled.p`
    font-size: 18px;
    font-family: 'Poppins';
`

export const NumbersButton = styled.button`
    background: none !important;
    font-size: 16px;
    font-family: 'Poppins';
    color: ${({theme}) => theme.text};
    @media (max-width: 768px){
        font-size: 14px;
    }
`

export const UserFeed = styled.article`
    margin-top: 160px;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    overflow-y: auto;
    @media (max-width: 768px){
        margin-top: 48px;
        padding: 0px 12px;
    } 
`

export const FeedImg = styled.img`
display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
`