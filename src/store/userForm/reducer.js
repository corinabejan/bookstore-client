import { POST_USERS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_USERS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
