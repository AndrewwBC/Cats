import styled from "styled-components";

export const Container = styled.main`
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 32px;
    padding-bottom: 64px;
`

export const Content = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    gap: 18px;
    justify-content: center;
`

export const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0px 64px;
`

export const MapContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`
export const MapInfos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: ${({theme}) => theme.form};
    gap: 12px;
    justify-content: space-between;
    cursor: pointer;
    &:hover{
        background-color: rgba(0,0,0,.1);
    }
`

export const PetShopAddress = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 12px;
` 

export const ImgMap = styled.img`
    width: 100%;
    place-self: end;
    object-fit: cover;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
`