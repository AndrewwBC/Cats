import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0px;
        outline: 0px;
        padding: 0px;
    } 
   
    main, section, p, h1, h2, h3,h4, div {
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

    li{
        list-style: none;
    }

    p{
        color: ${(props) => props.theme.text};   
    }

    h1,h2,h3,h4 {
        color: ${(props) => props.theme.titles};     
    }
    a{
        text-decoration: none;
        color: ${(props) => props.theme.link};
    }

`;
