import {ACTION_TYPES} from '../actions/book';

const initialState = {
  list: [],
};

export const book = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL:
      return {
        ...state,
        list: [...action.payload],
      };

    default:
      return state;
  }
};
