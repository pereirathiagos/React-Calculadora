import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 30px;
    border: none;
    background-color: #808080; 
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
        background-color: #80808080; /* Altera a cor de fundo ao passar o mouse */
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Aumenta a sombra ao passar o mouse */
    }
`;
