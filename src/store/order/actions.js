import axios from "axios";
import { API_URL } from "../../config/constants";
import { selectUser } from '../userForm/selectors';
import { selectFavorites } from "../shoppingCart/selectors";

export const POST_ORDER = "POST_ORDER";

export const postOrderSuccess = (orders) => ({
  type: POST_ORDER,
  payload: orders,
});

export const postOrders = () => {
  return async (dispatch, getState) => {
    const user = selectUser(getState());
    const books = selectFavorites(getState())
    const response = await axios.post(`${API_URL}/orders`, {
      customerId: user.id,
      bookIds: books,
    })
    dispatch(postOrderSuccess(response.orders));
  }
};
