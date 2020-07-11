import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Homepage(props) {
  return (
    <Jumbotron>
      <Container>
      <h1>{props.title}</h1>
      <Image style={{ width: '150px', height: '250px'}} src={props.image} alt="" />
      <p>By: {props.author}</p>
      <p>Category: {props.genre}</p>
      <p>{props.price} euro</p>
      {props.showLink ? (
        <Link to={`/books/${props.id}`}>
          <Button>View Book</Button>
        </Link>
      ) : null}
      </Container>
    </Jumbotron>
  );
}
