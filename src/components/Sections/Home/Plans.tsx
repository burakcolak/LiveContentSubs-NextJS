import React from "react";
import { ProductType } from "@/models/productType";
import { getProductList } from "@/lib/services/ProductService";
import ProductsList from "../../ProductBoxs/ProductList";

const PlanSection = async () => {
  const products = await getProductList(ProductType.TwitchViewerPlan);
  return (
    <section className="m-4 md:m-8 bg-gray-50 text-gray-800 py-8">
      <p className="text-3xl font-bold lg:text-center text-gray-900">
        Best Twitch Viewer Bot Plans
      </p>
      <p className="text-primary font-bold lg:text-center mt-6">
        Choose the most suitable for you
      </p>
      <div className="grid grid-cols-5 gap-4">
        <ProductsList products={products} />
      </div>
    </section>
  );
};

export default PlanSection;
