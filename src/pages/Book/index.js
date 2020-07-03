import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Homepage from "../../components/Homepage";
import { fetchBooks } from "../../store/books/actions";
import { selectBooks } from "../../store/books/selectors";
import { fetchCategory } from "../../store/categories/actions";
import { selectCategories } from "../../store/categories/selectors";

export default function Book() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const categories = useSelector(selectCategories);
  const [sortBooks, setSortedBooks] = useState([]);

  const genre = books.map(book => {
    return book.genre
  })

  const categoryJSX = categories.map((category, i) => {
    return <option key={i}>{category.genre}</option>;
  });

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchCategory());
  }, []);

  return (
    <>
      <Jumbotron>
        <h1>Books To Find</h1>
        <Container>
          <div className="BrowseCategory">
            <select>
              <option>
                categories...
              </option>
              {categoryJSX}
            </select>
          </div>
        </Container>
        <Container>
          {books.map((book, i) => (
            <Homepage
              key={i}
              title={book.title}
              image={book.image}
              author={book.author}
              genre={book.genre}
              price={book.price}
            />
          ))}
        </Container>
      </Jumbotron>
    </>
  );
}
