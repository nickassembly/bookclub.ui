import {ACTION_TYPES} from '../actions/Book';

const initialState = {
  list: [],
};

export const Book = (state = initialState, action) => {
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
