import styled from "styled-components";

export const Container = styled.main`
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 32px;
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
    gap: 64px;
`

export const MapContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`
export const MapInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const PetShopAddress = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
` 

export const ImgMap = styled.img`
    width: 100%;
    border-radius: 12px;
`