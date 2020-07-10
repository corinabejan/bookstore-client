import axios from "axios";
import { API_URL } from "../../config/constants";

export const POST_USERS = "POST_USERS";

export const postUsersSuccess = (users) => ({
  type: POST_USERS,
  payload: users,
});


export const postUsers = (
  firstName,
  lastName,
  email,
  streetName,
  streetNumber,
  postalCode,
  city,
  country,
  phoneNumber
) => {
  return async (dispatch, getState) => {
    const users = await axios.post(`${API_URL}/users`, {
      firstName,
      lastName,
      email,
      streetName,
      streetNumber,
      postalCode,
      city,
      country,
      phoneNumber,
    });

    dispatch(postUsersSuccess(users.data.user));
  };
};
