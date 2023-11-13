"use client";
import { ProductListResponse } from "@/lib/services/ProductService";
import React from "react";
import ProductBox from "./ProductBox";
import { useRouter } from "next/navigation";
import { PagePaths } from "@/models/pagePaths";

type Props = {
  products: ProductListResponse[] | null;
};

const ProductsList = ({ products }: Props) => {
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

      if (response.status === 401) router.push(PagePaths.Login);

      router.push(PagePaths.ShoppingCart);
    } catch (error: any) {
      if (error === 401) router.push(PagePaths.Login);
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
};

export default ProductsList;
