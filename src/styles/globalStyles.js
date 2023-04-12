import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        padding: none;
        transition: .3s;
    } 
   
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        font-family: 'Roboto';  
    }

    button{
        border: none;
    }

    h1,h2,h3,h4 {
        color: ${(props) => props.theme.titles};     
    }
    a{
        text-decoration: none;
    }

`;
