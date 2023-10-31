"use client";
import React from "react";
import {
  ProductListResponse,
  UtilityListResponse,
} from "@/lib/services/ProductService";
import { ProductListUtilities } from "./ProductListUtilities";

type Props = {
  product: ProductListResponse;
  key: string;
  handlePurchase: (productId: string) => void;
};

function ProductBox({ product, handlePurchase }: Props) {
  if (product == null) return <div></div>;

  return (
    // <div className="bg-blue-50 mt-6 rounded-md mx-4">
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
}

// function ProductBox({ product }: Props) {
//   if (product == null) return <div></div>;

//   return (
//     <div>
//       <span className=" badge font-bold secondary-font bg-primary text-white">
//         {product?.title}
//       </span>
//       <h3 className="pt-3 font-bold text-heading-default h3">
//         <span className="currency">$5 /day</span>
//       </h3>
//       <p className="m-0 text-sm font-bold text-body-default">
//         Just try and observe
//       </p>
//       <div className="pix-pb-102 pt-4">
//         <div id="duo-icon-66319838" className="slide-in-container w-full">
//           <div className="py-2">
//             <div className="pix-feature-list font-bold py-2 flex items-center">
//               <span className="text-black">25 Live Viewer</span>
//             </div>
//             <div className="pix-feature-list font-bold py-2 flex items-center">
//               <div className="pix-mr-10 text-primary w-6 h-6 min-w-6 min-h-6 relative flex items-center justify-center"></div>
//               <span className="text-black">25 Chatlist</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="pix-mt-20">
//         <a
//           href="https://viewerapps.com/cart/?add-to-cart=24504"
//           className="btn mb-2 shadow-sm btn-primary block w-full secondary-font btn-md"
//         >
//           <span className="font-bold">Purchase</span>
//         </a>
//       </div>
//     </div>
//   );
// }

export default ProductBox;
