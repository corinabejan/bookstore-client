import axios from 'axios';
import { API_URL } from '../../config/constants';

export const FETCH_ORDER = "FETCH_ORDER";

export const fetchOrderSuccess = orders => ({
  type: FETCH_ORDER,
  payload: orders
});

export const fetchOrders = () => {
  const response = axios.post(`${API_URL}/orders`)
  dispatch(response.data.orders);
}