import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Select } from '../../styles/select';
import * as Creators from '../../redux/action/professionalType';
interface Props {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectProfessionalType: React.FC<Props> = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const professionalType = useSelector(
    (state: State) => state.professionalType,
  );

  useEffect(() => {
    dispatch(Creators.list());
  }, []);

  if (professionalType.loading) {
    return <Loader type="ThreeDots" color="#0c0c4b" height={30} width={30} />;
  }

  return (
    <Select onChange={onChange} value={value} required>
      <option value={undefined}>Tipo de Profissional</option>
      {professionalType.data.map(type => (
        <option key={type.id} value={type.id}>
          {type.descricao}
        </option>
      ))}
    </Select>
  );
};

export default SelectProfessionalType;
