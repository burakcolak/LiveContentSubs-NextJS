import ShoppingCart from "@/components/ShoppingCart/ShoppingCart";
import { getShoppingCart } from "@/lib/services/ShoppingCartService";
import React from "react";

const ShoppingCartPage = async () => {
  const shoppingCart = await getShoppingCart();

  return <ShoppingCart shoppingCart={shoppingCart} />;
};

export default ShoppingCartPage;
