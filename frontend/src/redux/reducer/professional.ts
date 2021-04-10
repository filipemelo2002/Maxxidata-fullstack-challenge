const TEMPLATE_NAME = 'PROFESSIONAL';

const initialState = (): ProfessionalInterface => {
  return {
    data: [],
    loading: false,
    error: false,
  };
};

interface ListSuccess {
  type: string;
  payload: IProfessionalResponse[];
}
interface CreateSuccess {
  type: string;
  payload: IProfessionalResponse;
}

type Action = ListSuccess | CreateSuccess;

const reducer = (
  state = initialState(),
  action: Action,
): ProfessionalInterface => {
  switch (action.type) {
    case `${TEMPLATE_NAME}_PENDING`: {
      return {
        ...state,
        loading: true,
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
    case `${TEMPLATE_NAME}_FULFILLED`: {
      return {
        ...state,
        data: action.payload as IProfessionalResponse[],
        loading: false,
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_CREATE_SUCCESS`: {
      const newData = state.data;
      newData.push(action.payload as IProfessionalResponse);
      return {
        ...state,
        data: newData,
        loading: false,
        error: false,
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
