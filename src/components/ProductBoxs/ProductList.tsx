"use client"; //todo: use client or server ? handle method here or on page?
import { ProductListResponse } from "@/lib/services/ProductService";
import React from "react";
import ProductBox from "./ProductBox";
import { useRouter } from "next/navigation";

type Props = {
  products: ProductListResponse[] | null;
};

function ProductsList({ products }: Props) {
  const router = useRouter();

  async function handlePurchase(productId: string) {
    if (!productId) return;

    try {
      const response = await fetch(
        `/api/shopping-cart/purchase?productId=${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 401) router.push("/login");

      router.push("/checkout");
    } catch (error: any) {
      if (error === 401) router.push("/login");
    }
  }

  return (
    <>
      {products ? (
        <>
          {products.map((product) => {
            return (
              <ProductBox
                handlePurchase={handlePurchase}
                key={product.identifier}
                product={product}
              />
            );
          })}
        </>
      ) : (
        <p>No products available</p>
      )}
    </>
  );
}

export default ProductsList;
