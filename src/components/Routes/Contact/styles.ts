import styled from "styled-components";

export const Container = styled.main`
    max-width: 1000px;
    margin: 0 auto;
`

export const Content = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    padding: 80px 0px;
    gap: 18px;
    justify-content: center;
    @media (max-width: 1000px){
        padding: 80px 16px;
    }
    @media (max-width: 768px){
        padding: 40px 16px;
    }
`
export const Titles = styled.h2`
    font-family: 'Poppins';
    color: #fb1;
    font-size: 1.4rem;
    @media (max-width: 768px){
        font-size: 1.2rem;
    }
    @media (max-width: 620px){
        font-size: 1rem;
    }
`

export const Text = styled.p`
    font-size: 1rem;
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.text};
    @media (max-width: 768px) {
    font-size: .8rem;
    }
    @media (max-width: 535px) {
        font-size: 0.8rem;
    }
    `

export const FormContainer = styled.div`
    display: grid;
    border-radius: 8px;
    grid-template-columns: 1fr;
    background-color: ${({theme}) => theme.map};
    padding: 16px;
    align-items: self-start;
 `
export const TextArea = styled.textarea`
    border-radius: 8px;
    padding: 8px;
    grid-column: 1/-1;
    background-color: ${({theme}) => theme.input};
`

export const Names = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    @media (max-width:768px){
        grid-template-columns: 1fr;
        gap: 12px;
        margin-bottom: 12px;
    }
`


export const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0px 64px;
    margin-bottom: 64px;
    @media (max-width: 768px){
        flex-direction: column;
        gap: 12px;
        padding: 24px;
    }
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
    background-color: ${({theme}) => theme.map};
    gap: 12px;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        background-color: rgba(0,0,0,.1);
    }
`

export const PetShopAddress = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 500px){
        grid-template-columns: 1fr;
        gap: 16px;
    }
` 

export const ImgMap = styled.img`
    width: 100%;
    place-self: end;
    object-fit: cover;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
`