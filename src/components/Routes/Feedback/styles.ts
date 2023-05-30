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

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 40px
`
export const Text = styled.div`
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

`

export const Name = styled.p`
    font-family: 'Poppins';
    font-size: 1.2rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    position: relative;
    color: ${({ theme }) => theme.text};
     @media (max-width: 768px) {
        font-size: 1rem;
    }
     @media (max-width: 535px) {
        font-size: 0.8rem;
    }
    &::before {
        content: " ";
        position: absolute;
        width: 2px;
        height: 20px;
        left: -8px;
        background-color: #fb1;
        border-radius: 2px;
    }

`

 export const Image = styled.img`
  width: 480px;
  height: 400px;
  display: block;
  object-fit: cover;
  max-height: 100%;
  @media (max-width:768px){
  max-width: 100%;
  height: 500px;
  }
  @media (max-width:420px){
  height: 400px;
  }
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.text};
`

