import React from "react";
import ElementsForm from "./components/ElementsForm";
import { getPaymentIntent } from "@/lib/services/PaymentService";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import { AuthOnly } from "@/components/AuthOnly/AuthOnly";
import EmptyView from "@/components/Views/EmptyView";

type Props = {
  searchParams: { [key: string]: string | string | string[] | undefined };
};

const CheckoutPage = async ({ searchParams }: Props) => {
  const orderIdentifier = searchParams.order
    ? (searchParams.order as string)
    : "";
  const paymentIntent = await getPaymentIntent(orderIdentifier);
  if (!paymentIntent) return <EmptyView message="Something went wrong" />;

  const { clientSecret, totalAmount } = paymentIntent;

  return (
    <AuthProvider>
      <AuthOnly>
        <div className="flex justify-center">
          <div className="w-2/5">
            <ElementsForm clientSecret={clientSecret} amount={totalAmount} />
          </div>
        </div>
      </AuthOnly>
    </AuthProvider>
  );
};

export default CheckoutPage;
