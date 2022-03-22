import {SET_DATA} from '../actions/actionTypes';

const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
