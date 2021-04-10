const TEMPLATE_NAME = 'PROFESSIONAL_TYPE';

const initialState = (): ProfessionalTypeInterface => {
  return {
    data: [],
    loading: false,
    error: false,
  };
};

interface ListSuccess {
  type: string;
  payload: IProfessionTypeResponse[];
}
interface CreateSuccess {
  type: string;
  payload: IProfessionTypeResponse;
}

type Action = ListSuccess | CreateSuccess;

const reducer = (
  state = initialState(),
  action: Action,
): ProfessionalTypeInterface => {
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
        data: action.payload as IProfessionTypeResponse[],
        loading: false,
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_CREATE_SUCCESS`: {
      const newData = state.data;
      newData.push(action.payload as IProfessionTypeResponse);
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
