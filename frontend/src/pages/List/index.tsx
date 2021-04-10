import React from 'react';

import { Container, Content } from '../../styles/list';
import ProfessionalList from '../../components/ProfessionalList';
import ProfessionalTypeList from '../../components/ProfessionalTypeList';

const Professional: React.FC = () => {
  return (
    <Container>
      <h1>Listagens de Profissionais e Tipos de Profissionais</h1>
      <Content>
        <ProfessionalList />
        <ProfessionalTypeList />
      </Content>
    </Container>
  );
};

export default Professional;
