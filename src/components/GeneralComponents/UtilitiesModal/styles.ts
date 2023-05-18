import styled, { keyframes } from "styled-components";

export const Modal = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    left: 0;
    margin: 0 auto;
    display: flex;
    align-items: end;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 6rem 1rem;
    justify-content: end;
    border-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    @media (min-width:500px){
        display: none;
    }
`

const In = keyframes`
    from {
        transform: translate3d(0, 40px, 0);
    } to {
        transform: translate3d(0, 0px, 0);
    }
`

export const Content = styled.div`
   animation: ${In} 1s ease;
`

export const IconTitle = styled.p`
    font-family: 'Poppins';
    font-size: 14px;
`