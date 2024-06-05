import React from 'react';
import { InputContainer } from './style'; // Importe o componente styled que você criou

// Componente Input
const Input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
}

export default Input;
