import { getProductList } from "@/lib/services/ProductService";
import React from "react";

import { ProductType } from "@/models/productType";
import { Metadata } from "next";
import ProductsList from "@/components/ProductBoxs/ProductList";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Twitch Viewer Botting Plans",
    description: "The best Twitch viewer botting plans",
  };
}

export default async function Twitch() {
  const products = await getProductList(ProductType.TwitchViewerPlan);
  return (
    <div>
      <div className="container">
        <h1>The Best Twitch View Botting Plans</h1>
        <ProductsList products={products} />
      </div>
    </div>
  );
}
