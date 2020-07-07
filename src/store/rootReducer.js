import { combineReducers } from "redux";
import appState from "./appState/reducer";
import books from "./books/reducer";
import categories from "./categories/reducer";
import bookDetails from "./bookDetails/reducer";
import shoppingCart from "./shoppingCart/reducer";

export default combineReducers({
  appState,
  books,
  categories,
  bookDetails,
  shoppingCart,
});
