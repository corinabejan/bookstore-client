import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useSelector, useDispatch } from "react-redux";
import { selectBooks } from "../../store/books/selectors";
import { addFavorite, removeFavorite } from "../../store/shoppingCart/actions";
import { selectFavorites } from "../../store/shoppingCart/selectors";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cartList = useSelector(selectFavorites);
  const books = useSelector(selectBooks);

  const cartBooks = books.filter((book) => {
    return cartList.includes(`${book.id}`);
  });

  const prices = cartBooks.map((b) => {
    return b.price * cartList.filter((f) => f === b.id).length;
  });

  const setOfBooks = Array.from(new Set(cartBooks, (book) => book.id));

  return (
    <>
      <Jumbotron>
        <h1>Your shopping cart</h1>
        <table className="tableStyle">
          <tbody>
            {setOfBooks.map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>
                    <div>
                      <button onClick={() => dispatch(removeFavorite(book.id))}>
                        ⊖
                      </button>{" "}
                      <button onClick={() => dispatch(addFavorite(book.id))}>
                        ⊕
                      </button>
                      {cartList.filter((f) => f === book.id).length}x
                    </div>
                  </td>
                  <td>{book.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr className="line" />
        <div className="total">
          {`total    € ${prices.reduce((total, num) => {
            return total + num;
          }, 0)}`}
        </div>
        <Container>
          <Button>Checkout</Button>
        </Container>
      </Jumbotron>
    </>
  );
}
