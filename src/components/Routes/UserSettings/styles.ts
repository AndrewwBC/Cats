import styled from "styled-components";

export const Container = styled.main`
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 65px);
    margin: 0 auto;
    
`

export const Content = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 8px;
`
export const AsideMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 4px 32px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: ${({theme}) => theme.text};
`

export const ResetContainer = styled.div`
    padding: 32px;
    width: 400px;
    background-color: ${({theme}) => theme.form};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
`

export const ResetUserName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`
export const ChangeOption = styled.li`
    font-family: 'Roboto';
    color: ${({theme}) => theme.form};
    font-size: 500;
    cursor: pointer;
`

export const ResetPassword = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`