"use client";
import React from "react";
import { ProductListResponse } from "@/lib/services/ProductService";
import ProductListUtilities from "./ProductListUtilities";

type Props = {
  product: ProductListResponse;
  key: string;
  handlePurchase: (productId: string) => void;
};

const ProductBox = ({ product, handlePurchase }: Props) => {
  if (product == null) return <div></div>;

  return (
    <div key={product.identifier} className="border-2 mt-6 rounded-lg mx-4">
      <div className=" border-slate-300 my-6 mx-4 ">
        <span className="badge font-bold rounded-md mx-2 px-2 py-1 secondary-font bg-primary text-white">
          {product?.title}
        </span>
        <div className="ml-2 pt-3">
          <span className="text-3xl font-bold">${product?.price}</span>
          {product?.durationType !== "None" && (
            <span className="font-semibold">
              {` / ${
                product?.durationFactor === 1 ? "" : product?.durationFactor
              } ${product.durationType}`}
            </span>
          )}
        </div>
        <p className="ml-2 my-6 text-sm font-bold ">{product?.subtitle}</p>
        <ProductListUtilities utilities={product?.utilities} />
        <button
          onClick={() => handlePurchase(product?.identifier)}
          type="button"
          className=" ml-2 mt-6 px-8 py-3 font-semibold rounded-md bg-primary text-gray-100"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
