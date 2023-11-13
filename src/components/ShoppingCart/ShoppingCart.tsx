"use client";
import { ShoppingCartResponse } from "@/lib/services/ShoppingCartService";

import React from "react";
import { AuthProvider } from "../AuthProvider/AuthProvider";
import { AuthOnly } from "../AuthOnly/AuthOnly";
import FormContainer from "../Container/Container";
import Link from "next/link";
import { parseResponse } from "@/lib/utils";
import { CheckoutResponse } from "@/lib/services/OrderService";
import { useRouter } from "next/navigation";
import { getProductTypeDisplayName } from "@/models/productType";
import { PagePaths } from "@/models/pagePaths";
type Props = {
  shoppingCart: ShoppingCartResponse | null;
};

const ShoppingCart = ({ shoppingCart }: Props) => {
  const router = useRouter();

  async function handleEmptyCartButtonClick(event: any): Promise<void> {
    try {
      const response = await fetch(`/api/shopping-cart/empty`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });

      const responseJson = await parseResponse<boolean>(response);
      if (responseJson) router.refresh(); //TODO: do not refresh, but update state?
    } catch (error) {
      console.log("error emptying cart", error);
    }
  }

  async function handleCheckoutButtonClick(event: any): Promise<void> {
    try {
      const response = await fetch(`/api/shopping-cart/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });
      const responseJson = await parseResponse<CheckoutResponse>(response);
      router.push(
        `${PagePaths.Checkout}?order=${responseJson.orderIdentifier}`
      );
    } catch (error) {
      console.log("error checking out", error);
    }
  }

  return (
    <AuthProvider>
      <AuthOnly>
        <FormContainer>
          {!shoppingCart ? (
            <div className="flex flex-col justify-center items-center space-y-4">
              <h2 className="text-2xl font-semibold">Shopping cart is empty</h2>
              <Link href={PagePaths.Home}>
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
                <h2 className="text-3xl font-bold">Order summary</h2>
                <ul className="flex flex-col pt-8 space-y-2">
                  {shoppingCart.shoppingCartItems.map((item) => {
                    return (
                      <li
                        className="flex items-end justify-between"
                        key={item.product?.identifier}
                      >
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold  sm:pr-8">
                            {getProductTypeDisplayName(item.product?.type)}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.product?.title}
                          </p>
                        </div>
                        <div className="text-right my-1">
                          <span className="block">${item.product?.price}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="pt-4 space-y-2">
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
                      onClick={handleCheckoutButtonClick}
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
};

export default ShoppingCart;
