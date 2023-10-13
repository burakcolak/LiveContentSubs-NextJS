import ProductsList from "@/components/ProductBoxs/ProductList";
import { getProductList } from "@/lib/services/ProductService";
import { ProductType } from "@/models/productType";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Youtube Viewer Botting Plans",
    description: "The best Youtube viewer botting plans",
  };
}

async function Youtube() {
  const products = await getProductList(ProductType.YoutubeViewBotPlan);
  return (
    <div>
      <div className="container">
        <h1>The best Youtube Viewer Bot sevice</h1>
        <br />
        <ProductsList products={products} />
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const products = await getProductList(ProductType.YoutubeViewBotPlan);
//   return {
//     props: {
//       products,
//     },
//     revalidate: 3600,
//   };
// }

export default Youtube;
