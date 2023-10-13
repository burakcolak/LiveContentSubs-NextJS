import { FaqItem } from "@/components/Faq/FaqItem";
import React from "react";

const faqPage = () => {
  return (
    <>
      <section className="bg-gray-50 py-8">
        <h2 className="mb-8 pl-4 pt-8 font-bold text-left sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="pl-4 sm:text-xl">Frequently Asked Questions about us:</p>
      </section>
      <section className="bg-gray-50 pt-8">
        <div className="flex py-4">
          <div className="w-1/6 h-1/2 text-3xl pl-4 flex flex-col font-bold space-y-10 text-blue-500">
            <p>General</p>
            <p>Questions</p>
            <p>About</p>
            <p>ViewerApps</p>
          </div>
          <div className="w-5/6 space-y-4 pr-4">
            <FaqItem
              question="How do you ensure security and privacy? How can I trust you?"
              answer=" First of all, we should say that due to our privacy policy, your
            membership information and channel name will not be shared with
            anyone. First of all, you do not need to download any program
            for any product on our site. Programs will cause you to be
            banned / blacklisted. In addition, it harms your computer.
            Making all transactions through our website protects your
            channel and your computer from bad results."
            />
            <FaqItem
              question="Do you make sponsorship / franchise agreements?"
              answer="We do not take kindly to business partnership and sponsorship
             agreements. Our work for our dealership platform continues. We
             will start negotiations for dealership very soon."
            />
            <FaqItem
              question="Can I change my channel name while I have a package?"
              answer="You can change your channel name only if our channel has been
             banned by twitch. Other than that, you cannot change the channel
             name."
            />
            <FaqItem
              question="Will I download any program to my computer?"
              answer="First of all, you do not need to download any program for any
                    product on our site. Programs will cause you to be banned /
                    blacklisted. In addition, it harms your computer. Making all
                    transactions through our website protects your channel and your
                    computer from bad results."
            />
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 font-semibold focus:outline-none focus-visible:ri">
                How does the system work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                First of all, you must be a member of our site. Make sure you
                write your channel name correctly while signing up. Because your
                package will be defined to your channel. (If you type it wrong,
                you can get support about changing the channel name from live
                support.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                After becoming a member, you can proceed to the payment step. We
                receive payment by credit card and money order method. If you
                are paying from abroad, you can select the overseas card payment
                option. Your package is automatically activated when you pay by
                credit card / debit card. If you have paid by bank transfer,
                please provide information from live support. Our live support
                operators will check and activate your package (This process
                takes 1-2 minutes.)
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                After your package is activated, your panel login will be
                opened.
              </p>
            </details>
            <FaqItem
              question="Can I delete my account?"
              answer="No, any data recorded on our website cannot be deleted. Your
            user information and usage logs are kept confidential. It is not
            shared with third parties."
            />
            <FaqItem
              question="Can I earn ad revenue?"
              answer="Bots in some of our plans watch ads. But bots only watch Twitch
            official ads. It does not watch other ads and does not generate
            revenue."
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 pt-8">
        <div className="flex py-4">
          <div className="w-1/6 h-1/2 text-3xl pl-4 flex flex-col font-bold space-y-10 text-blue-500">
            <p>Questions</p>
            <p>About</p>
            <p>Twitch</p>
            <p>Viewer</p>
            <p>Bot</p>
          </div>
          <div className="w-5/6 space-y-4 pr-4">
            <FaqItem
              question="Can I become an Affiliate and/or Partner with the Twitch live viewer bot?"
              answer="You can participate using the Twitch viewer bot. There are many criteria that Twitch seeks to be a partner. The prerequisite is 75 viewers. But Twitch takes care to be organic when looking at 75 viewers. So, unfortunately, you cannot meet the 75 audience criteria with a bot. By using bots, you increase the number of viewers of your broadcast and rise to the top. Thus, you will attract organic viewers to your channel and you will complete the criterion by gaining 75 organic viewers over time. In other words, bots allow you to become a Partner indirectly, not directly."
            />
            <FaqItem
              question="What is Followers Private Chat plugin?"
              answer="All our twitch viewer bot products include a chat bot feature. However, in order to use the chat bot feature, your chat must not be in the followers-only mode. If you want to use it in follower-only mode, you can purchase a follower-specific chat bot plugin and use it with your package. The duration of the package is defined as 1 month for your membership. If your viewer bot package expires sooner, you can renew your package and you can continue to use your follower-only add-on package with your new package."
            />
            <FaqItem
              question="What is the host at plugin?"
              answer="Our Twitch viewer bot products do not include a host/raid feature. If you assign host/raid, your bot will understand and shut down. If you want to host, you can buy a host plugin and use it. The usage steps are written on the hosting panel. Follow the steps there. The duration of the package is defined as 1 month for your membership. If your follower bot package expires sooner, you can renew your package and continue to use your follower-only add-on package with your new package."
            />
            <FaqItem
              question="What is the risk of getting banned when I use a Twitch viewer bot?"
              answer="We do not ask you to download any program in any package you receive. All transactions are done from the control panel on our website. Programs will cause you to be banned/blacklisted. No programs, no viruses, no bans/blacklists."
            />
            <FaqItem
              question="Do you want my twitch account password to use my viewer bot package?"
              answer="ViewerApps attaches great importance to customer privacy. Twitch never asks for information such as your account password or phone number."
            />
            <FaqItem
              question="Is there a usage limit?"
              answer="Yes. The daily bot usage limit is 8 hours."
            />
            <FaqItem
              question="Is there a way to get around the usage limit?"
              answer="The daily usage limit of each plan is 8 hours. If you buy two of the same plan, you get 8 more hours of usage limit, so you can use your bot plan for 16 hours. But remember, when you buy two of the same plans, you are not entitled to an additional number of viewers. For example, if you have a 100 viewers plan, you can use a 100 viewer plan for 8 hours. If you buy 1 more of the same plan, you will have the usage right to use the 100 viewer plan for 16 hours."
            />
            <FaqItem
              question="Is there a bot usage limit?"
              answer="Yes, the daily limit is 8 hours for twitch viewer bot. There is no monthly limit. You can use your bot every day for a total of 8 hours per day."
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 pt-8">
        <div className="flex py-4">
          <div className="w-1/6 h-1/2 text-3xl pl-4 flex flex-col font-bold space-y-10 text-blue-500">
            <p>Questions</p>
            <p>About</p>
            <p>Youtube</p>
            <p>Viewer</p>
            <p>Bot</p>
          </div>
          <div className="w-5/6 space-y-4 pr-4">
            <FaqItem
              question="Can I use my package on every live stream on the channel?"
              answer="1 packet is defined to only 1 channel. You can use it in every live stream of your channel as long as it is not in your package at the same time."
            />
            <FaqItem
              question="Should I enter a link to the panel?"
              answer="To start your bot, you must enter your stream ID on the panel. If you enter a link, your bot will not work. Your stream ID is the part after = in your stream link."
            />
            <FaqItem
              question="What is the stream ID?"
              answer="It is the part after = in your live stream link."
            />
            <FaqItem
              question="When can I start using the Youtube viewer bot after receiving the package?"
              answer="
              All products and services of ViewerApps.com are developed in-house and use their own software. In short, viewerapps.com is not a trader. For this reason, the twitch botting service becomes active as soon as you purchase it and you can start using it. Our system is 100% automation."
            />
            <FaqItem
              question="Is there a youtube chat bot?"
              answer="Unfortunately, our youtube chat bot sales have not started yet. Our work will be completed soon and packages will be available for sale."
            />
            <FaqItem
              question="Is there a bot usage time limit?"
              answer="No, there is no time limit for youtube viewer bot. "
            />
          </div>
        </div>
      </section>
      <div className="p-6 py-8 bg-blue-500 text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">
              Twitch View Bot Free Trial
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus 10% discount! Use code:</span>
              <span className="font-bold text-lg">WELCOME</span>
            </div>
            <a
              href="/login"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default faqPage;
