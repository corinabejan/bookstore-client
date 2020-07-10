import { POST_ORDER } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
