import { getProductList } from "@/lib/services/ProductService";
import React from "react";

import { ProductType } from "@/models/productType";
import { Metadata } from "next";
import ProductsList from "@/components/ProductBoxs/ProductList";
import FlameIcon from "@/components/Svgs/Flame";
import ChartIcon from "@/components/Svgs/Chart";
import LockIcon from "@/components/Svgs/Lock";
import AlertComponent, { AlertTheme } from "@/components/Alerts/Alert";
import Image from "next/image";
import TwitchBotIcon from "@/components/Icons/TwitchBotIcon";
import PieChartIcon from "@/components/Svgs/PieChart";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Twitch Viewer Botting Plans",
    description: "The best Twitch viewer botting plans",
  };
}

export default async function Twitch() {
  const products = await getProductList(ProductType.TwitchViewerPlan);
  return (
    <main>
      <div className="container mx-auto">
        <section className=" bg-twitch-blue">
          <h2 className="text-5xl font-bold lg:text-center text-white">
            <p>Fast and Safe Viewbotting</p>
            <p>on Twitch Service</p>
          </h2>
          <span className="block py-6 mb-2 font-medium lg:text-center text-white">
            #1 Number Viewbotting on Twitch Service
          </span>
          <h1></h1>
          <div className="grid gap-4 px-32 py-16 lg:grid-cols-3">
            <div className="flex">
              <div className="w-1/5">
                <FlameIcon />
              </div>
              <div className="w-4/5">
                <div>
                  <h1 className="my-3 text-3xl font-semibold text-white">
                    Instant Activation
                  </h1>
                </div>
                <div className="text-white">
                  Twitch bot system is automation. You can access the panel as
                  soon as you purchase the package.
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/5">
                <ChartIcon />
              </div>
              <div className="w-4/5">
                <div>
                  <h1 className="my-3 text-3xl font-semibold text-white">
                    Stable and Fast
                  </h1>
                </div>
                <div className="text-white">
                  The stability rate of our view botting Twitch service is 90%.
                  There is no sudden decrease or increase.
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/5">
                <LockIcon />
              </div>
              <div className="w-4/5">
                <div>
                  <h1 className="my-3 text-3xl font-semibold text-white">
                    Safe %100
                  </h1>
                </div>
                <div className="text-white">
                  Our viewbotting on Twitch service is 100% Legit. We provide a
                  No-Ban Guarantee.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-50 text-gray-800 py-8">
          <p className="text-3xl font-bold mt-8 lg:text-center text-gray-900">
            Best Twitch Viewer Bot Plans
          </p>
          <p className="text-primary font-bold lg:text-center mt-6">
            Choose the most suitable for you
          </p>
          <div className="grid grid-cols-5 gap-4">
            <ProductsList products={products} />
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-gray-50">
            <AlertComponent
              theme={AlertTheme.Warning}
              title="Need More Viewers?"
              description="We offer up to 500 viewers as pre-packages. If you need more than 500 viewers, you can get a quote from our Live Support team right away."
            />
            <AlertComponent
              className="pt-4"
              theme={AlertTheme.Info}
              title="Important!"
              description="There is no time limit in our system. However, due to excessive use, streams such as 24/7, afk, sleep, reruns, subathon are prohibited. Accounts making such streams will be deactivated on our website for 3 days."
            />
          </div>
        </section>
        <section className="bg-gray-50 mt-8">
          <section className="py-6  text-gray-900">
            <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
              <div className="flex flex-col space-y-4 text-center lg:text-left">
                <h1 className="text-3xl font-bold">
                  What is the View Bot Twitch?
                </h1>
                <p className="text-lg">
                  Twitch; In the last 5 years, it has come a long way especially
                  in our country and continues to grow rapidly. In addition to
                  being an extremely competitive environment, it takes a lot of
                  effort to be discovered and accessible among streamers.
                  Ranking on Twitch does not work with SEO logic. In other
                  words, the more viewers you have in the ranking, the more
                  discoverable you will be and you will see that new viewers who
                  have not watched your stream before are in your chat. Check
                  out our prices and see how easy it is to get on twitch by
                  purchasing a twitch view bot. You are at the right place to
                  buy Twitch bots.
                </p>
              </div>
              <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                <div className="flex flex-row">
                  <TwitchBotIcon />
                </div>
              </div>
            </div>
          </section>
          <section className="m-4 md:m-8 bg-gray-50 text-gray-800 py-8">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
              <h2 className="text-3xl font-bold">
                Some advantages of using a viewbotting Twitch.
              </h2>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col items-center p-4">
                <PieChartIcon />
                <h3 className="my-3 text-3xl font-semibold">
                  Some "Average" Issues
                </h3>
                <div className="space-y-1 mx-16">
                  <p>
                    Twitch bot viewers, contrary to what is known, have a
                    significant impact on twitch statistics. Full-time twitch
                    streamers, on the other hand, sleep with the average and get
                    up with the average. In short, the average number of viewers
                    among those who are "partners" is important. With the Twitch
                    viewer bot, you can significantly increase your average view
                    count.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <PieChartIcon />
                <h3 className="my-3 text-3xl font-semibold">
                  Be like "Everest" in the ranking!
                </h3>
                <div className="space-y-1 mx-16">
                  <p>
                    The Twitch "browse" page is important. Your potential
                    viewers, donors, and subscribers will discover you here, and
                    if you only have 3-4 viewers, you won't be so lucky to be
                    discovered. It is more possible for the broadcaster, who
                    already has 50 viewers, to meet new viewers. Twitch botting
                    saves you in this regard.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <PieChartIcon />
                <h3 className="my-3 text-3xl font-semibold">
                  Goals & Achievements
                </h3>
                <div className="space-y-1 mx-16">
                  <p>
                    Twitch viewer bot is permissible on the road to
                    participation. Remember those old days when you first stream
                    and think about the time when you met the average of 3
                    viewers to participate and the subscription button was
                    opened. You will not waste your time at this level by
                    botting your Twitch channel.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <PieChartIcon />
                <h3 className="my-3 text-3xl font-semibold">
                  Certain subject "Partnership"?
                </h3>
                <div className="space-y-1 mx-16">
                  <p>
                    Unfortunately, being a partner with the Twitch view cheat is
                    a controversial issue. We have partnered with many streamers
                    since 2016, but many of them could not become partners. The
                    Twitch watch bot helps you become partners yes, but
                    indirectly. Read our blog on this topic.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
