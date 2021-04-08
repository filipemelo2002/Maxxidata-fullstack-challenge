import { Dispatch } from 'redux';
import * as Api from '../../api/session';

const TEMPLATE_NAME = 'SESSION';

export const login = ({ email, senha }: ILogin) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: `${TEMPLATE_NAME}_PENDING` });
      const response = await Api.login({ email, senha });
      dispatch({
        type: `${TEMPLATE_NAME}_LOGIN_SUCCESS`,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: `${TEMPLATE_NAME}_REJECTED`,
      });
    }
  };
};
