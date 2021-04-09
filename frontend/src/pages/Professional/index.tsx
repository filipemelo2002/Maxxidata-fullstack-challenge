import React from 'react';

import { Container } from '../../styles/professional';
import NewProfessionalForm from '../../components/NewProfessionalForm';

const Professional: React.FC = () => {
  return (
    <Container>
      <h1>Adicionar Profissional</h1>
      <NewProfessionalForm />
    </Container>
  );
};

export default Professional;
