import { UtilityListResponse } from "@/lib/services/ProductService";
import React from "react";

type Props = {
  utilities: UtilityListResponse[] | null;
};

// export function ProductListUtilities( {utilities} :Props) {

export const ProductListUtilities: React.FC<Props> = ({ utilities }) => {
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
