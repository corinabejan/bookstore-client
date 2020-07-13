import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { API_URL } from "../../config/constants";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      const data = axios.post(`${API_URL}/checkout`, { id, amount: 2000 });
      return data;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <CardElement />
      <Link to='/form'>
        <button type="submit" disabled={!stripe}>
          Checkout
        </button>
      </Link>
    </form>
  );
}
