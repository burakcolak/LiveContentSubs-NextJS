import ProductsList from "@/components/ProductBoxs/ProductList";
import { getProductList } from "@/lib/services/ProductService";
import { ProductType } from "@/models/productType";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Twitch Follower Service",
    description: "The best Twitch follower service",
  };
}

async function Follower() {
  const products = await getProductList(ProductType.TwitchFollower);
  return (
    <div>
      <div className="container">
        <h1>Fast and Safe Viewbotting on Twitch Service</h1>
        <br />
        <ProductsList products={products} />
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const products = await getProductList(ProductType.TwitchFollower);
//   return {
//     props: {
//       products,
//     },
//     revalidate: 3600,
//   };
// }

export default Follower;
