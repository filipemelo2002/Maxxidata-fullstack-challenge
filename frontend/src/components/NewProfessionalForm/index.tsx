import React from 'react';

import { Container } from '../../styles/newProfessionalForm';

const NewProfessionalForm: React.FC = () => {
  return (
    <Container>
      <form>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" name="phone" />

        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" name="email" />
        <button>Cadastrar</button>
      </form>
    </Container>
  );
};

export default NewProfessionalForm;
