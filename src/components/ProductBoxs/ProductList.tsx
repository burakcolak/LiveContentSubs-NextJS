import { ProductListResponse } from "@/lib/services/ProductService";
import React from "react";
import ProductBox from "./ProductBox";

type Props = {
  products: ProductListResponse[] | null;
};

function ProductsList({ products }: Props) {
  return (
    <>
      {products ? (
        <>
          {products.map((product) => {
            return <ProductBox key={product.identifier} product={product} />;
          })}
        </>
      ) : (
        <p>No products available</p>
      )}
    </>
  );
}

export default ProductsList;
