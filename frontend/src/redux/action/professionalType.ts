import { Dispatch } from 'redux';
import * as Api from '../../api/professionalType';
import { showSuccess } from '../../services/showToast';

const TEMPLATE_NAME = 'PROFESSIONAL_TYPE';

export const list = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: `${TEMPLATE_NAME}_PENDING` });
      const response = await Api.list();
      dispatch({
        type: `${TEMPLATE_NAME}_FULFILLED`,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: `${TEMPLATE_NAME}_REJECTED`,
      });
    }
  };
};

export const create = (data: IProfessionalTypeCreateBody) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: `${TEMPLATE_NAME}_PENDING` });
      const response = await Api.create(data);
      dispatch({
        type: `${TEMPLATE_NAME}_SUCCESS`,
        payload: response,
      });
      showSuccess('Tipo de Profissional criado com sucesso');
    } catch (err) {
      dispatch({
        type: `${TEMPLATE_NAME}_REJECTED`,
      });
    }
  };
};
