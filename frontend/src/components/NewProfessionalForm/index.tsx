import React, { useState } from 'react';

import { Container } from '../../styles/newProfessionalForm';
import SelectProfessionalType from '../../components/SelectProfessionalType';
const NewProfessionalForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [situacao, setSituacao] = useState(true);

  return (
    <Container>
      <form>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />

        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <SelectProfessionalType
          value={undefined}
          onChange={e => {
            console.log(e);
          }}
        />
        <section>
          <input
            type="checkbox"
            name="status"
            id="status"
            onClick={() => setSituacao(!situacao)}
            checked={situacao}
          />
          <label htmlFor="status">
            Deseja marcar o profissional como ativo?
          </label>
        </section>
        <button>Cadastrar</button>
      </form>
    </Container>
  );
};

export default NewProfessionalForm;
