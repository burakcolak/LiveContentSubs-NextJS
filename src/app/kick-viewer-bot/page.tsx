import ProductsList from "@/components/ProductBoxs/ProductList";
import { getProductList } from "@/lib/services/ProductService";
import { ProductType } from "@/models/productType";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Kick Viewer Botting Plans",
    description: "The best Kick viewer botting plans",
  };
}

async function Kick() {
  const products = await getProductList(ProductType.KickViewerPlan);
  return (
    <div>
      <div className="container">
        <h1>Enhance your Kick Channel with the Best Kick Viewer Bot Service</h1>
        <br />
        <ProductsList products={products} />
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const products = await getProductList(ProductType.KickViewerPlan);
//   return {
//     props: {
//       products,
//     },
//     revalidate: 3600,
//   };
// }

export default Kick;
