import axios from "axios";
import { API_URL } from "../../config/constants";

export const FETCH_BOOK_DETAILS = "FETCH_BOOK_DETAILS";

export const fetchBookSuccess = (books) => ({
  type: FETCH_BOOK_DETAILS,
  payload: books,
});

export const fetchBookById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${API_URL}/books/${id}`);
    dispatch(fetchBookSuccess(response.data));
  };
};
