import React, { useEffect } from 'react';

import { Container, Active, Inactive } from '../../styles/professionalList';
import { useSelector, useDispatch } from 'react-redux';
import * as Creators from '../../redux/action/professional';
const ProfessionalList: React.FC = () => {
  const dispatch = useDispatch();
  const professional = useSelector((state: State) => state.professional);
  useEffect(() => {
    dispatch(Creators.list());
  }, []);
  return (
    <Container>
      <ul>
        {professional.data.map(p => (
          <li key={p.id}>
            <h2>{p.nome}</h2>
            <p>{p.tipoDeProfissional}</p>
            {p.situacao ? <Active>Ativo</Active> : <Inactive>Inativo</Inactive>}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ProfessionalList;
