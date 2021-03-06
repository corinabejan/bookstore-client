import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Homepage from "../../components/Homepage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchBooks } from "../../store/books/actions";
import { selectBooks } from "../../store/books/selectors";
import { fetchCategory } from "../../store/categories/actions";
import { selectCategories } from "../../store/categories/selectors";
import "./index.css";

export default function Book() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const categories = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [searchBook, setSearchBook] = useState("");

  const filteredBooks =
    selectedCategory == -1
      ? books
      : books.filter((book) => {
          return book.categoryId == selectedCategory;
        });

  const categoryJSX = categories.map((category, i) => {
    return (
      <option key={i} value={category.id}>
        {category.genre}
      </option>
    );
  });

  const normalizeQuery = (query) => {
    return query.toLowerCase().replace(/\s-/g, "");
  };

  const filteredSearch = filteredBooks.filter((book) => {
    return normalizeQuery(book.title).includes(normalizeQuery(searchBook));
  });

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <h1>Books To Find</h1>
        <Container>
          <div className="BrowseCategory">
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value={-1}>categories...</option>
              {categoryJSX}
            </select>
          </div>
        </Container>
        <Container>
          <input
            style={{ marginLeft: "1000px", borderRadius: "8px" }}
            type="search"
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
            placeholder="Search for a book..."
          />
        </Container>
        <Container>
          <Row>
            {filteredSearch.map((book, i) => (
              <Col sm="3">
                <Homepage
                  key={i}
                  id={book.id}
                  title={book.title}
                  image={book.image}
                  author={book.author}
                  genre={book.genre}
                  price={book.price}
                  showLink={true}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}
