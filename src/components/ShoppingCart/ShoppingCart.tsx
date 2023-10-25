"use client";
import { ShoppingCartResponse } from "@/lib/services/ShoppingCartService";

import React from "react";
import { AuthProvider } from "../AuthProvider/AuthProvider";
import { AuthOnly } from "../AuthOnly/AuthOnly";
import FormContainer from "../Container/Container";
import Link from "next/link";
type Props = {
  shoppingCart: ShoppingCartResponse | null;
};

function ShoppingCart({ shoppingCart }: Props): JSX.Element {
  async function handleEmptyCartButtonClick(event: any): Promise<void> {
    try {
      const response = await fetch(`/api/shopping-cart/empty`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });

      const responseJson = await response.json();
      console.log("next client response", response, responseJson);
    } catch (error) {
      console.log("next client error", error);
    }
  }

  return (
    <AuthProvider>
      <AuthOnly>
        <FormContainer>
          {!shoppingCart ? (
            <div className="flex flex-col justify-center items-center space-y-4">
              <h2 className="text-2xl font-semibold">Shopping cart is empty</h2>
              <Link href="/">
                <button
                  type="button"
                  className="px-2 py-2 font-semibold border rounded bg-teal-600 text-gray-50 border-teal-600"
                >
                  Go to Shopping
                </button>
              </Link>
            </div>
          ) : (
            <div className="divide-y space-y-2">
              <div>
                <h2 className="text-2xl font-semibold">Order items</h2>
                <ul className="flex flex-col pt-4 space-y-2">
                  {shoppingCart.shoppingCartItems.map((item) => {
                    return (
                      <li
                        className="flex items-start justify-between"
                        key={item.product?.identifier}
                      >
                        <h3>{item.product?.title}</h3>
                        <div className="text-right my-1">
                          <span className="block">${item.product?.price}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="pt-4 space-y-2 ">
                <div className="space-y-6 ">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span className="font-semibold">
                      ${shoppingCart.totalAmount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="px-2 py-2 border rounded-md border-teal-600"
                      onClick={handleEmptyCartButtonClick}
                    >
                      Empty cart
                    </button>
                    <button
                      type="button"
                      className="px-2 py-2 font-semibold border rounded bg-teal-600 text-gray-50 border-teal-600"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </FormContainer>
      </AuthOnly>
    </AuthProvider>
  );
}

export default ShoppingCart;
