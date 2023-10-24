import ProductsList from "@/components/ProductBoxs/ProductList";
import { getProductList } from "@/lib/services/ProductService";
import { ProductType } from "@/models/productType";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Cart from "@/components/Cart/Cart";
import TwitchBotIcon from "@/components/Icons/TwitchBotIcon";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Youtube Viewer Botting Plans",
    description: "The best Youtube viewer botting plans",
  };
}

async function Youtube() {
  const products = await getProductList(ProductType.YoutubeViewBotPlan);
  return (
    <main>
      <div className="container mx-auto">
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500 flex">
          <div className="ml-12 w-1/2 h-96">
            <h5 className="text-left text-white text-6xl font-bold pt-10 ">
              The best Youtube Viewer Bot sevice
            </h5>
            <p className="pt-8 text-white">
              We know how hard it is to be discoverable on YouTube! Increase
              your discoverability with Youtube views bot.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/youtube-viewer-banner.png"
              alt="The best Youtube Viewer Bot sevice"
              width="640"
              height="305"
            />
          </div>
        </section>
        <section className="bg-gray-50 text-gray-800 py-8">
          <p className="text-3xl font-bold mt-8 lg:text-center text-gray-900">
            Youtube View Bot Plans
          </p>
          <p className="text-primary font-bold lg:text-center mt-6">
            Youtube view bot packs for streamers of all levels
          </p>
          <div className="grid grid-cols-5 gap-4">
            <ProductsList products={products} />
          </div>
          <div className="p-12">
            <p>
              All our Youtube Views Bot plans to prevent abuse; Limited to 1
              youtube channel for 1 package. You can use your plan on only 1
              youtube channel.
            </p>
            <strong>Daily usage limit is 8 hours.</strong>
          </div>
        </section>
        <section className="my-8  bg-gray-50 text-gray-800 py-8">
          <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex ml-12 mt-12">
              <div>
                <Image
                  src="/images/instant-activation.png"
                  width={70}
                  height={70}
                  alt="Picture of instant activation"
                />
              </div>
              <div className="space-y-1 mx-12">
                <h3 className="text-3xl font-semibold">Instant Activation</h3>
                <p>
                  When you &quot;buy a kick views bot&quot; it activates
                  instantly. Just click on Bot Control.
                </p>
              </div>
            </div>
            <div className="flex ml-12 mt-12">
              <div>
                <Image
                  src="/images/live-support.png"
                  width={70}
                  height={70}
                  alt="Picture of live support"
                />
              </div>
              <div className="space-y-1 mx-12">
                <h3 className="text-3xl font-semibold">24/7 Live Support</h3>
                <p>
                  Our operators answer your questions about "buy kick views"
                  around the clock.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-12 pt-32 space-y-4">
            <h3 className="text-3xl font-semibold">
              What is the viewbot for Youtube?
            </h3>
            <p>
              Youtube has become a strong competitor to Twitch as a Live
              Streaming platform. Although it does not have as many streamers as
              twitch, it is more difficult to be discovered on youtube compared
              to twitch. Stream ranking on Twitch is from Most Viewed to Less
              Viewed, but this situation changes according to the algorithm in
              Youtube. As ViewerApps.com Developer Team, we have developed a
              great tool to make your youtube live streams discoverable. Buy
              Youtube Views Bot and expand your viewers.
            </p>
          </div>
          <div className="mx-12 pt-32 space-y-4">
            <h3 className="text-3xl font-semibold">
              Youtube bot views "Plan Features"
            </h3>
            <div className="container mx-auto flex grid-rows-4 justify-between ">
              <Cart
                image={{
                  src: "/images/easy-dashboard.png",
                  alt: "Easy Dashboard",
                  width: 70,
                  height: 70,
                }}
                title="Easy Dashboard"
                description="You can start your Youtube bot in the settings you specify and as many times as you want via the Bot Control dashboard."
              />
              <Cart
                image={{
                  src: "/images/no-program-virus.png",
                  alt: "No Program and Virus",
                  width: 70,
                  height: 70,
                }}
                title="No Program and Virus"
                description='You don"t need to download a program to your computer for Youtube bot service. You provide all the controls through our site.'
              />
              <Cart
                image={{
                  src: "/images/legit.png",
                  alt: "%100 Legit",
                  width: 70,
                  height: 70,
                }}
                title="%100 Legit"
                description="Kick bot process is 100% legit. As ViewerApps.com, we offer a guarantee not to be banned."
              />
              <Cart
                image={{
                  src: "/images/long-term-usage.png",
                  alt: "Long Term Usage",
                  width: 70,
                  height: 70,
                }}
                title="Long Term Usage"
                description="Daily limit is 8 hours. You can use 7/24 hours with 3 same plans."
              />
            </div>
          </div>
        </section>
        <section className="my-8 bg-gray-50 text-gray-800 py-8">
          <div className="flex px-4 space-x-16">
            <div className="w-1/2">
              <Image
                src={"/images/youtube-viewer-company.png"}
                alt="Youtube Viewer"
                width={800}
                height={500}
              />
            </div>
            <div className="w-1/2">
              <h5 className="text-5xl pt-8">
                You just
                <span className="font-bold underline pl-1 decoration-purple-700">
                  Stream
                </span>
              </h5>
              <p className="pt-8">
                With the viewbotting on Twitch control panel, you can start as
                many bots as you want, with the settings you want, whenever you
                want. You can increase the number of viewers while continuing
                the stream. You can start your chat bot or change the chat
                subject.
              </p>
              <p className="pt-8 text-purple-700 font-bold text-xl">
                <a href="/dashboard">Click to try our Bot Control dashboard!</a>
              </p>
            </div>
          </div>
          <div className="container mx-auto flex flex-col justify-center p-4 mt-12 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
            <div className="flex flex-col space-y-4 text-center lg:text-left w-2/3">
              <h1 className="text-3xl font-semibold">
                How to use Youtube Viewer Bot Dashboard?
              </h1>
              <p className="text-lg">
                After the purchase, your control panel login will be announced.
                You can start your bot by entering the Stream ID from the bot
                control. Stream ID is the 11-digit letters and numbers after the
                “=” of the stream link. For example,
                https://www.youtube.com/watch?v= “MSBD3NihupQ” Please note that
                if you enter the stream link of a channel other than your own
                channel, you will be suspended from the system for 5 days.
              </p>
            </div>
            <div className="w-1/3">
              <Image
                alt="How to use Youtube Viewer Bot Dashboard?"
                src={"/images/youtube-viewer-dashboard.png"}
                width={1024}
                height={410}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
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
