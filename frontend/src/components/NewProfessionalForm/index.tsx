import React, { FormEvent, useState } from 'react';

import { toast } from 'react-toastify';
import { Container } from '../../styles/newProfessionalForm';
import SelectProfessionalType from '../../components/SelectProfessionalType';
import { useDispatch, useSelector } from 'react-redux';
import * as Creators from '../../redux/action/professional';
import Loader from 'react-loader-spinner';

const NewProfessionalForm: React.FC = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [situacao, setSituacao] = useState(true);
  const [professionalType, setProfessionalType] = useState<string | undefined>(
    undefined,
  );
  const { loading } = useSelector((state: State) => state.professional);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loading) {
      if (!professionalType) {
        toast.warn('Por favor, selecione o Tipo do Profissional.');
        return false;
      }
      dispatch(
        Creators.create({
          nome,
          situacao,
          tipoDeProfissional: professionalType,
          email,
          telefone,
        }),
      );
    }
    return true;
  };
  return (
    <Container>
      <form onSubmit={submitForm}>
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
          value={professionalType}
          onChange={e => {
            setProfessionalType(e.target.value);
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
        {loading ? (
          <Loader type="ThreeDots" color="#0c0c4b" height={30} width={30} />
        ) : (
          <button>Cadastrar</button>
        )}
      </form>
    </Container>
  );
};

export default NewProfessionalForm;
