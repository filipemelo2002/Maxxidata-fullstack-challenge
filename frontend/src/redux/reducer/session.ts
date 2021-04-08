const TEMPLATE_NAME = 'SESSION';

const initialState = (): SessionInterface => {
  return {
    admin: {
      createdAt: '',
      email: '',
      id: '',
      nome: '',
      updatedAt: '',
    },
    token: '',
    loading: false,
    error: false,
  };
};

interface SuccessLogin {
  payload: ILoginRes;
  type: string;
}
type Action = SuccessLogin;

const reducer = (state = initialState(), action: Action): SessionInterface => {
  switch (action.type) {
    case `${TEMPLATE_NAME}_PENDING`: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_LOGIN_SUCCESS`: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
        loading: false,
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_REJECTED`: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case 'RESET': {
      return initialState();
    }
    default:
      return state;
  }
};

export default reducer;
