import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif; /* Usando a fonte Roboto como padrão */
        background-color: #f5f5f5; /* Cor de fundo global */
        color: #333333; /* Cor padrão do texto */
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    /* Adicione mais estilos globais conforme necessário */
`;

