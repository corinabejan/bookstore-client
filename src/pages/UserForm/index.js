import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { postUsers } from "../../store/userForm/actions";
import { postOrders } from "../../store/order/actions";
import { Link } from "react-router-dom";

export default function UserForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await dispatch(
      postUsers(
        firstName,
        lastName,
        email,
        streetName,
        streetNumber,
        postalCode,
        city,
        country,
        phoneNumber
      )
    );
    await dispatch(postOrders());
  };

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">
        Please insert your information so you can receive your FREE COFFEE
        voucher
      </h1>
      <Form.Group>
        <Form.Control
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
          placeholder="First name..."
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          type="text"
          placeholder="Last name..."
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Email..."
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={streetName}
          onChange={(event) => setStreetName(event.target.value)}
          type="text"
          placeholder="Street name..."
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={streetNumber}
          onChange={(event) => setStreetNumber(event.target.value)}
          type="text"
          placeholder="Street Number..."
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={postalCode}
          onChange={(event) => setPostalCode(event.target.value)}
          type="text"
          placeholder="Postal Code..."
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={city}
          onChange={(event) => setCity(event.target.value)}
          type="text"
          placeholder="City..."
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          type="text"
          placeholder="Country..."
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          type="text"
          placeholder="Phone number..."
          required
        />
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitHandler}>
          Submit information
        </Button>
      </Form.Group>

      <Link to={"/confirmation"}>
        <Button>Go to confirmation</Button>
      </Link>
    </Form>
  );
}
