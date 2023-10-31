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
    <main>
      <div className="container mx-auto">
        <section className="bg-gray-50 pt-8">
          <h2 className="text-7xl font-bold lg:text-center text-black-500">
            <p>Twitch Followers</p>
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 w-2/3 py-12">
              <ProductsList products={products} />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="font-bold flex flex-col w-2/3 space-y-2 mb-8">
              <p>Followers reach your channel in an average of 30 minutes.</p>
              <p>
                Some of the accounts have a profile picture. Some do not. In
                this way, they look organic.
              </p>
              <p>
                You can forward all your questions to our customer services.
              </p>
              <p>
                Follower accounts can be block/shut down and dropped by twitch
                over the years. There is no guarantee.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Follower;
