import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Jumbotron from "react-bootstrap/Jumbotron";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  "pk_test_51H2ZrHIbBPkxOCroYVDOfgOwMhQp9dxyIIiu6M8zGIJOiulVsaZF2WXcSFIxCKLQeLI4fD6n5SkmKTjkHu2KVKjb00vfV503lM"
);

export default function Checkout() {
  return (
    <>
      <Jumbotron>
         <Elements stripe={stripePromise}>
           <CheckoutForm />
         </Elements>
      </Jumbotron>
    </>
  );
}
