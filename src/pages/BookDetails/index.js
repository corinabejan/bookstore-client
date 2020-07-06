import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../../store/bookDetails/actions";
import { selectBookDetails } from "../../store/bookDetails/selectors";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function BookDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectBook = useSelector(selectBookDetails);

  useEffect(() => {
    dispatch(fetchBookById(id));
  }, [dispatch, id]);

  return (
    <>
      <Jumbotron>
        <h1>{selectBook.title}</h1>
        <Image src={selectBook.image} alt="" />
        <p>{selectBook.author}</p>
        <p>{selectBook.genre}</p>
        <p>{selectBook.review}</p>
        <p>{selectBook.price} euro</p>
        <Container>
          <Button>Buy Book</Button>
        </Container>
      </Jumbotron>
    </>
  );
}
