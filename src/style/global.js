import { createGlobalStyle } from "styled-components"; 

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        background-color: #181818;
    }

    input, button {
        outline: none;
    }
`;

export default GlobalStyle