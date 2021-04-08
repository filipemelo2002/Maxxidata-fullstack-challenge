const TEMPLATE_NAME = 'ADMIN';

const initialState = (): AdminInterface => {
  return {
    data: [],
    loading: false,
    error: false,
  };
};

interface CreateSuccess {
  type: string;
  payload: IAdminResponse;
}

type Action = CreateSuccess;
const reducer = (state = initialState(), action: Action): AdminInterface => {
  switch (action.type) {
    case `${TEMPLATE_NAME}_PENDING`: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_CREATE_SUCCESS`: {
      return {
        ...state,
        data: [...state.data, action.payload],
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
