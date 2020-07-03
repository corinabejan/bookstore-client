import { API_URL } from "../../config/constants";
import axios from "axios";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export const fetchCategorySuccess = (category) => ({
  type: "FETCH_CATEGORIES",
  payload: category,
});

export const fetchCategory = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${API_URL}/categories`);
    dispatch(fetchCategorySuccess(response.data));
  };
};
