import React from 'react';
import { ButtonContainer } from './style'; // Importe o componente styled que você criou

// Componente Button
const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
