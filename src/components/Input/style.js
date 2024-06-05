import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    min-height: 75px;
    background-color: #cccccc; 
    margin

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 40px;
    font-family: 'Roboto';
    padding: 0 20px; 
    input {
        flex: 1;
        height: 100%;
        border: none;
        background-color: transparent; 
        font-size: inherit;
        font-family: inherit;
        color: #333333; 
        outline: none; 

    input::placeholder {
        color: #999999; 
    }

    input:focus {
        border-bottom: 2px solid #FF6F61; /* Adicionando uma borda inferior ao focar */
    }
`;
