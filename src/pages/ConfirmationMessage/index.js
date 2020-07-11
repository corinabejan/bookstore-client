import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userForm/selectors";
import { selectFavorites } from "../../store/shoppingCart/selectors";
import './index.css';

export default function ConfirmationMessage() {
  const user = useSelector(selectUser);
  const order = useSelector(selectFavorites);

  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <>
      <Jumbotron>
        <h1 id="confirmation">Your confirmation message</h1>
        <Container>
          <h5>
            Hey{" "}
            <span>
              {user.firstName} {user.lastName}
            </span>
            , you just bought a coffee from Corina's BookStore
          </h5>
          <h5>
            Your order was created at: <span>{date}</span>
          </h5>
          <h5>
            Your order number is: <span>{user.id}</span>
          </h5>
          <h5>
            And because nothing goes better with a good book than a good coffee{" "}
            <br /> you received a voucher for <span>5 euro</span> from me
            <br />
            so you can enjoy as much as possible.
          </h5>
        </Container>
      </Jumbotron>
    </>
  );
}
