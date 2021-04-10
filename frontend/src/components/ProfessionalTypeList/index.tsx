import React, { useEffect } from 'react';

import { Container, Active, Inactive } from '../../styles/professionalList';
import { useSelector, useDispatch } from 'react-redux';
import * as Creators from '../../redux/action/professionalType';
const ProfessionalTypeList: React.FC = () => {
  const dispatch = useDispatch();
  const professionalType = useSelector(
    (state: State) => state.professionalType,
  );
  useEffect(() => {
    dispatch(Creators.list());
  }, []);
  return (
    <Container>
      <ul>
        {professionalType.data.map(p => (
          <li key={p.id}>
            <h2>{p.descricao}</h2>
            {p.situacao ? <Active>Ativo</Active> : <Inactive>Inativo</Inactive>}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ProfessionalTypeList;
