import { FETCH_BOOK_DETAILS } from "./actions";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOK_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
