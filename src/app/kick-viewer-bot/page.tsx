import Alert, { AlertTheme } from "@/components/Alerts/Alert";
import KickBotIcon from "@/components/Icons/KickBotIcon";
import TwitchBotIcon from "@/components/Icons/TwitchBotIcon";
import ProductsList from "@/components/ProductBoxs/ProductList";
import ChartIcon from "@/components/Svgs/Chart";
import CheckCircleIcon from "@/components/Svgs/CheckCircle";
import FlameIcon from "@/components/Svgs/Flame";
import KeyIcon from "@/components/Svgs/Key";
import LockIcon from "@/components/Svgs/Lock";
import MedalIcon from "@/components/Svgs/Medal";
import PieChartIcon from "@/components/Svgs/PieChart";
import { getProductList } from "@/lib/services/ProductService";
import { ProductType } from "@/models/productType";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import KickBotTwoIcon from "@/components/Icons/KickBotTwoIcon";
import Cart from "@/components/Cart/Cart";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Kick Viewer Botting Plans",
    description: "The best Kick viewer botting plans",
  };
}

async function Kick() {
  const products = await getProductList(ProductType.KickViewerPlan);
  return (
    <main>
      <div className="container mx-auto">
        <section className=" bg-kick-green">
          <h2 className="text-5xl font-bold lg:text-center text-white">
            <p>Enhance your Kick Channel</p>
            <p>with the Best Kick Viewer Bot Service</p>
          </h2>
          <span className="block py-6 mb-2 font-medium lg:text-center text-white">
            #1 Number Kick Viewer Bot Service
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
                  Kick bot system is automation. You can access the panel as
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
                  The stability rate of our view botting Kick service is 90%.
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
            The Fastest Kick Viewer Bot Plans
          </p>
          <p className="text-primary font-bold lg:text-center mt-6">
            Choose the most suitable kick bot viewers plan for you
          </p>
          <div className="grid grid-cols-5 gap-4">
            <ProductsList products={products} />
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-gray-50">
            <Alert
              className="pt-4"
              theme={AlertTheme.Info}
              title="Important!"
              description="There is no time limit in our system. However, due to excessive use, streams such as 24/7, afk, sleep, reruns, subathon are prohibited. Accounts making such streams will be deactivated on our website for 3 days."
            />
          </div>
        </section>
        <section className="bg-gray-50 mt-8">
          <section className="py-8  text-gray-900">
            <div className="flex">
              <div className="flex">
                <div>
                  <MedalIcon width={90} height={90} color="#FF2929" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">No Virus & No Ban</h1>
                  <p>
                    You don't need to install a program or script to use our
                    Kick Bots service. We provide all bot controls through our
                    site. 100% Legit.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <MedalIcon width={90} height={90} color="#299DFF" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">
                    Easy Dashboard & Interface
                  </h1>
                  <p>
                    You can start and stop your kick bots bot with a few clicks
                    in a few seconds. With the last update v7.2, bot reactions
                    are now reduced to 2-4 minutes.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <MedalIcon width={90} height={90} color="#7C95A9" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">
                    Adjustable Viewer Count
                  </h1>
                  <p>
                    You can determine and change the number of viewers in the
                    range supported by your Kick bot viewers package.
                  </p>
                </div>
              </div>
            </div>
            <div className="container mx-auto flex flex-col justify-center p-4 mt-12 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
              <div className="flex flex-col space-y-4 text-center lg:text-left">
                <h1 className="text-3xl font-semibold">
                  What is the View Bot Trovo?
                </h1>
                <p className="text-lg">
                  Meet with the Trovo viewer bot service, which is not
                  automatic, independent of you, but completely private and
                  under your control. Get your plan with instant delivery. Then,
                  whenever you want, your bot will start whenever you want.
                  Whether at the start of the stream, at the 14th minute of the
                  stream, at the 81st minute or at the end. Or don’t use it in
                  your stream you don’t want. A system completely specific to
                  what you want. When you buy it, you will get access to the
                  Trovo viewer bot dashboard. You can start the Trovo bot
                  whenever you want and you can decrease or increase your viewer
                  count at any time. Without the need for live support.
                  Everything, all controls are in Trovo bot dahsborad.
                </p>
              </div>
              <div>
                <TwitchBotIcon />
              </div>
            </div>
            <div className="container mx-auto flex flex-col justify-center p-4 mt-12 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
              <div className="w-1/3">
                <KickBotIcon />
              </div>
              <div className="flex flex-col space-y-4 w-2/3 text-center lg:text-left">
                <h1 className="text-3xl font-semibold">
                  Explore Our Kick View Bot Service
                </h1>
                <p className="text-lg">
                  Elevate your Kick.tv channel with our potent stream
                  enhancement solutions! We deliver top-notch followers and
                  spectators to aid in expanding your viewership and amplifying
                  audience interaction. Our offerings are crafted to enhance
                  your access to natural traffic and exposure, enabling you to
                  connect with a broader audience and strengthen your brand
                  presence. Give our solutions a try today and experience the
                  transformation firsthand!
                </p>
                <p>
                  When deciding on a service provider for kick view bot,
                  dependability and assistance are of utmost importance. At
                  ViewerApps, we’ve gathered a devoted team of professionals who
                  labor tirelessly to guarantee your contentment. Thanks to our
                  24/7 live customer support, you can relax, confident that any
                  questions or problems you may face will be promptly attended
                  to. Our kick viewer bot solutions are intricately crafted to
                  function flawlessly, providing you with the assurance you
                  rightfully deserve. ViewerApps is dedicated to your triumph
                  and will be your unwavering companion throughout your journey.
                </p>
              </div>
            </div>
          </section>
          <section className="m-4 md:m-8 bg-gray-50 text-gray-800 py-8">
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12">
                  <CheckCircleIcon />
                </div>
                <h3 className="my-3 text-3xl font-semibold">
                  Enhanced Exposure
                </h3>
                <div className="space-y-1 mx-16">
                  <p>
                    Utilizing the ViewerApps Kick Viewer Bot offers a key
                    benefit: it can significantly enhance your presence on the
                    platform. By garnering additional views and likes on your
                    profile, you'll be able to draw in a larger audience and
                    potential clients. This proves particularly valuable if you
                    aim to establish yourself as an influencer or promote your
                    brand. Leveraging the ViewerApps Kick Viewer Bot enables you
                    to acquire the exposure required to distinguish yourself
                    from rivals and secure increased visibility.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12">
                  <KeyIcon />
                </div>
                <h3 className="my-3 text-3xl font-semibold">
                  Elevates Trustworthiness
                </h3>
                <div className="space-y-1 mx-16">
                  <p>
                    Accumulating a substantial count of views and likes on your
                    Kick profile can significantly elevate your trustworthiness.
                    When prospective followers or clients encounter a popular
                    profile, they tend to place greater trust in you and
                    perceive you as a serious contender. This, in turn, sets you
                    apart from fellow platform users and augments your overall
                    impact. By employing the Kick Viewer Bot, you can swiftly
                    and effortlessly enhance your trustworthiness, positioning
                    yourself as a reputable influencer or brand.
                  </p>
                </div>
              </div>
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
                    When you 'buy a kick views bot' it activates instantly. Just
                    click on Bot Control.
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
          </section>
        </section>
        <section className="bg-gray-50 mt-8">
          <div className="container mx-auto flex">
            <div className="container mx-auto flex flex-col justify-center p-4 mt-12 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
              <div className="w-1/3">
                <KickBotTwoIcon />
              </div>
              <div className="flex flex-col space-y-4 w-2/3 text-center lg:text-left">
                <h1 className="text-3xl font-semibold">
                  How to use Kick Viewer Bot Dashboard?
                </h1>
                <p className="text-lg">
                  When you make the payment, your package will be activated
                  instantly and your dashboard access will be opened. You can
                  see your Kick view bot plan on the Dashboard. Dashboard has a
                  bar where you can set the number of viewers. After choosing
                  your viewer count, you can start your bot. Your Kick Viewer
                  Bot will be on your stream in 5-10 minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="container p-12 mx-auto flex grid-rows-4 justify-between ">
            <Cart
              image={{
                src: "/images/easy-dashboard.png",
                alt: "Easy Dashboard",
                width: 70,
                height: 70,
              }}
              title="Easy Dashboard"
              description="You can start your Kick bot in the settings you specify and as many times as you want via the Bot Control dashboard."
            />
            <Cart
              image={{
                src: "/images/no-program-virus.png",
                alt: "No Program and Virus",
                width: 70,
                height: 70,
              }}
              title="No Program and Virus"
              description="You don't need to download a program to your computer for Kick bot service. You provide all the controls through our site."
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
          <p className="p-12">
            We know that Kick has been very popular lately. Trovo Platform is as
            popular as Kick. And even many of our customers are also in Trovo
            with Kick. Would you like to also check out our Trovo Viewer Bot
            plans?
            <strong className="ml-1">
              <a href="/trovo-viewer-bot-plans/">Click here to review.</a>
            </strong>
          </p>
        </section>
      </div>
    </main>
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
