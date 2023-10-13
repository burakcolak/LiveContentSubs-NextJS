import React from "react";

const Faq: React.FC = () => {
  return (
    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
      <p className="text-center">
        <span className="bg-red-500 text-white inline-block p-2 rounded-md">
          Get to the top! | Get New Followers! | Become Popular
        </span>
      </p>
      <h2 className="mb-8 mt-4 text-4xl font-bold leadi text-center sm:text-5xl">
        Boost Your Channel with Twitch Bot!
      </h2>
      <p className="p-2 text-sm font-medium tracki text-center uppercase">
        Accelerate the grow of your channel with Twitch view bots.
      </p>
      <p className="p-2 text-sm font-medium tracki text-center uppercase">
        Twitch bot increases your viewer count, so you can be among the
        recommended streams.
      </p>
      <div className="flex flex-col sm:px-8 lg:px-12 xl:px-32 mt-8">
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none focus-visible:ri">
              If I use view bot, will I be banied? Does it notice I’m using bot?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              No, you won’t be banied! Bots have nothing to do with any tips
              that can briefly link you to bots on your computer, internet, ip
              address or hash. In addition, we use residental (Home/Internet
              user) IP’s for bots. This way, Youtube or any other platform bots
              don’t notice. You control the top twitch viewer bot / youtube view
              bot from the viewerapps.com V7 panel. At viewerapps.com, we do not
              keep any logs or information pointing to your channel. Your
              current registration information is stored on off-shore servers
              with 2048-bit encryption. You’re perfectly safe with us.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none focus-visible:ri">
              Is viewer bot of ViewerApps safe?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              Your bots are not be connected to your computer and hashs. There
              is no need to download and install any program or script on your
              computer. So our service is 100 % safe. We have not encountered
              any banning yet.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none focus-visible:ri">
              What is your return policy?
            </summary>
            <p className="px-4 py-6  pt-0 ml-4 -mt-4 text-gray-600">
              Returns of products and programs that are delivered digitally are
              not accepted.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 font-semibold focus:outline-none focus-visible:ri">
              Is there a bot usage limit?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              Yes, the daily limit is 8 hours. There is no monthly limit. You
              can use your bot every day for a total of 8 hours per day. Please
              read TOS.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
