import { UtilityListResponse } from "@/lib/services/ProductService";
import React from "react";

type Props = {
  utilities: UtilityListResponse[] | null;
};

const ProductListUtilities = ({ utilities }: Props) => {
  if (utilities == null) return <></>;

  return utilities?.map((productUtility) => {
    return (
      <ul
        key={productUtility.title}
        className="list-none mt-2 font-bold ml-2 space-y-4"
      >
        <li key={productUtility.title}>
          <span className="text-black">{productUtility.title}</span>
        </li>
      </ul>
    );
  });
};

export default ProductListUtilities;
