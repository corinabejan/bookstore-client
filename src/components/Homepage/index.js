import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './index.css';

export default function Homepage(props) {
  return (
    <Jumbotron>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <Card style={{ width: '200px', height: '700px'}}>
              <Card.Body>
            <Card.Title className="title">{props.title}</Card.Title>
            <Card.Img
              style={{ width: "150px", height: "250px" }}
              src={props.image}
              alt=""
            />
            <Card.Text>By: {props.author}</Card.Text>
            <Card.Text>Category: {props.genre}</Card.Text>
            <p><span>{props.price} euro</span></p>
            {props.showLink ? (
              <Link to={`/books/${props.id}`}>
                <Button>View Book</Button>
              </Link>
            ) : null}
            </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
