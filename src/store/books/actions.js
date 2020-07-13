import { API_URL } from '../../config/constants';
import axios from 'axios';

export const FETCH_BOOKS = "FETCH_BOOKS";

export const fetchBooksSuccess = books => ({
  type: FETCH_BOOKS,
  payload: books
});

export const fetchBooks = () => {
  return async(dispatch, getState) => {
    const response = await axios.get(`${API_URL}/books`);
    dispatch(fetchBooksSuccess(response.data.books));
  }
}
