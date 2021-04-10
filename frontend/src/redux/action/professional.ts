import { Dispatch } from 'redux';
import * as Api from '../../api/professional';
import { showSuccess } from '../../services/showToast';

const TEMPLATE_NAME = 'PROFESSIONAL';

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

export const create = (data: IProfessionalCreate) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: `${TEMPLATE_NAME}_PENDING` });
      const response = await Api.create(data);
      dispatch({
        type: `${TEMPLATE_NAME}_CREATE_SUCCESS`,
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
