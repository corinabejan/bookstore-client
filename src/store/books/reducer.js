import { FETCH_BOOKS } from "./actions";


const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
