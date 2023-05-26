import styled from "styled-components";

export const Container = styled.main`
    max-width: 800px;
    display: flex;
    height: calc(100vh - 139px);
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.background};
    @media (max-width: 768px){
        height: calc(100vh - 120px);
    }
`

export const Content= styled.section`
    display: flex;
    padding: 48px;
    border-radius: 8px;
    align-items: center;
    gap: 32px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.form};
    color: ${({ theme }) => theme.text};
    @media (max-width: 768px){
        margin: 12px;
    }

`