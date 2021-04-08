import { Dispatch } from 'redux';
import * as Api from '../../api/admin';
import { showSuccess } from '../../services/showToast';

const TEMPLATE_NAME = 'ADMIN';
export const create = ({ email, nome, senha }: IAdminCreateBody) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: `${TEMPLATE_NAME}_PENDING` });
      await Api.create({ email, nome, senha });
      dispatch({
        type: `${TEMPLATE_NAME}_CREATE_SUCCESS`,
      });
      showSuccess('Usuário criado com sucesso!');
    } catch (err) {
      dispatch({
        type: `${TEMPLATE_NAME}_REJECTED`,
      });
    }
  };
};
