import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Homepage(props) {
  return (
    <Jumbotron>
      <h1>{props.title}</h1>
      <Image src={props.image} alt="" />
      <p>{props.author}</p>
      <p>{props.genre}</p>
      <p>{props.price} euro</p>
      {props.showLink ? (
        <Link to={`/books/${props.id}`}>
          <Button>View Book</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}
