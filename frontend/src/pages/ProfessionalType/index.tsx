import React from 'react';

import { Container } from '../../styles/professional';
import NewProfessionalTypeForm from '../../components/NewProfessionalTypeForm';

const Professional: React.FC = () => {
  return (
    <Container>
      <h1>Adicionar Tipo Profissional</h1>
      <NewProfessionalTypeForm />
    </Container>
  );
};

export default Professional;
