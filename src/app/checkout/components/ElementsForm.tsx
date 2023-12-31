"use client";

import type { StripeError } from "@stripe/stripe-js";

import * as React from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  Elements,
} from "@stripe/react-stripe-js";

import {
  formatAmountForDisplay,
  formatAmountForStripe,
} from "@/utils/stripe-helpers";
import * as config from "@/config";
import getStripe from "@/utils/get-stripejs";

type Props = {
  clientSecret: string;
  amount: number;
};

function CheckoutForm({ clientSecret, amount }: Props): JSX.Element {
  const [input, setInput] = React.useState<{
    cardholderName: string;
  }>({
    cardholderName: "",
  });
  const [paymentType, setPaymentType] = React.useState<string>("");
  const [payment, setPayment] = React.useState<{
    status: "initial" | "processing" | "error";
  }>({ status: "initial" });
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const stripe = useStripe();
  const elements = useElements();

  const PaymentStatus = ({ status }: { status: string }) => {
    switch (status) {
      case "processing":
      case "requires_payment_method":
      case "requires_confirmation":
        return <h2>Processing...</h2>;

      case "requires_action":
        return <h2>Authenticating...</h2>;

      case "succeeded":
        return <h2>Payment Succeeded 🥳</h2>;

      case "error":
        return (
          <>
            <h2>Error 😭</h2>
            <p className="error-message">{errorMessage}</p>
          </>
        );

      default:
        return null;
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      // Abort if form isn't valid
      if (!e.currentTarget.reportValidity()) return;
      if (!elements || !stripe) return;

      setPayment({ status: "processing" });

      const { error: submitError } = await elements.submit();

      if (submitError) {
        setPayment({ status: "error" });
        setErrorMessage(submitError.message ?? "An unknown error occurred");

        return;
      }

      // Use your card Element with other Stripe.js APIs
      const { error: confirmError } = await stripe!.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/result`,
          payment_method_data: {
            billing_details: {
              name: input.cardholderName,
            },
          },
        },
      });

      if (confirmError) {
        setPayment({ status: "error" });
        setErrorMessage(confirmError.message ?? "An unknown error occurred");
      }
    } catch (err) {
      const { message } = err as StripeError;

      setPayment({ status: "error" });
      setErrorMessage(message ?? "An unknown error occurred");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="border border-stripe-elements-color p-4 rounded">
          <legend className="text-stripe-elements-color">
            Your payment details:
          </legend>
          {paymentType === "card" ? (
            <input
              placeholder="Cardholder name"
              className="p-2 rounded mb-2 w-full border-1 border-gray-200"
              type="Text"
              name="cardholderName"
              onChange={handleInputChange}
              required
            />
          ) : null}
          <div className="">
            <PaymentElement
              onChange={(e) => {
                setPaymentType(e.value.type);
              }}
            />
          </div>
        </fieldset>
        <button
          className="bg-stripe-elements-color transition duration-200 border border-elements-color text-white font-semibold p-4 mt-4 rounded w-full"
          type="submit"
          disabled={
            !["initial", "succeeded", "error"].includes(payment.status) ||
            !stripe
          }
        >
          Pay {formatAmountForDisplay(amount, config.CURRENCY)}
        </button>
      </form>
      <PaymentStatus status={payment.status} />
    </>
  );
}

export default function ElementsForm({
  amount,
  clientSecret,
}: Props): JSX.Element {
  return (
    <Elements
      stripe={getStripe()}
      options={{
        appearance: {
          variables: {
            colorIcon: "#6772e5",
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          },
        },
        currency: config.CURRENCY,
        mode: "payment",
        amount: formatAmountForStripe(amount, config.CURRENCY),
      }}
    >
      <CheckoutForm clientSecret={clientSecret} amount={amount} />
    </Elements>
  );
}
