import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

export const Content = styled.div`
    background-color: #F0F0F0;
    width: 50%;
    padding: 20px;
    border-radius: 10px; /* Adicionando bordas arredondadas */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adicionando sombra */
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button`
    padding: 10px 20px; /* Aumentando o espaço interno */
    margin: 5px;
    background-color: #FF6F61; /* Cor de fundo mais vibrante */
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #FF5E55; /* Altera a cor de fundo ao passar o mouse */
    }
`

export const Input = styled.input`
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box; /* Garantindo que o padding não altere o tamanho total */
    transition: border-color 0.3s ease; /* Adicionando transição suave para a borda */

    &:focus {
        border-color: #FF6F61; /* Alterando a cor da borda quando focado */
    }
`
