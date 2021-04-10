import React, { FormEvent, useState } from 'react';

import { toast } from 'react-toastify';
import { Container } from '../../styles/newProfessionalForm';
import { useDispatch, useSelector } from 'react-redux';
import * as Creators from '../../redux/action/professionalType';
import Loader from 'react-loader-spinner';

const NewProfessionalForm: React.FC = () => {
  const dispatch = useDispatch();
  const [descricao, setDescricao] = useState('');
  const [situacao, setSituacao] = useState(true);
  const { loading } = useSelector((state: State) => state.professionalType);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loading) {
      if (!descricao) {
        toast.warn('Por favor, selecione o Tipo do Profissional.');
        return false;
      }
      dispatch(
        Creators.create({
          descricao,
          situacao,
        }),
      );
    }
    return true;
  };
  return (
    <Container>
      <form onSubmit={submitForm}>
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          id="descricao"
          name="descricao"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          required
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
            Deseja marcar o tipo de Profissional como ativo?
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
