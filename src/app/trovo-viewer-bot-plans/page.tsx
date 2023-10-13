import ProductsList from "@/components/ProductBoxs/ProductList";
import { getProductList } from "@/lib/services/ProductService";
import { ProductType } from "@/models/productType";
import { Metadata } from "next";

import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Trovo Viewer Botting Plans",
    description: "The best Trovo viewer botting plans",
  };
}

async function Trovo() {
  const products = await getProductList(ProductType.TrovoBotPlan);
  return (
    <div>
      <div className="container">
        <h1>Boost your Trovo Channel with the Best Trovo Bots Service</h1>
        <br />
        <ProductsList products={products} />
      </div>
    </div>
  );
}
export default Trovo;
