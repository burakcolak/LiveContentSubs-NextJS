import Box from "@/components/Views/Box";
import {
  faCircleCheck,
  faClockRotateLeft,
  faFileCode,
  faHeadset,
  faLaptopCode,
  faMedal,
  faMoneyCheckDollar,
  faRocket,
  faSackDollar,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <section>
        <h2 className="text-5xl font-bold text-center text-gray-900">
          Knowledge Base
        </h2>
        <span className="block py-4 mb-2 font-medium tracki text-center text-teal-600">
          <p>We have compiled the questions you are wondering about and</p>
          <p>we have created a Knowledge Base for you.</p>
        </span>
        <div className="grid gap-4 my-8 lg:grid-cols-3">
          <Box text="How to use the dashboard?" />
          <Box text="How do i purchase?" />
          <Box text="What is the Timeout?" />
          <Box text="What is the Host Plan?" />
          <Box text="Is ViewerApps safe?" />
          <Box text="What is your return policy?" />
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-col justify-center items-center bg-gray-50">
          <div className="w-36 h-36 rounded-full flex items-center justify-center  bg-sky-50">
            <div className="w-24 h-24  text-sky-300">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900">
              How Do I Make a Purchase?
            </h2>
            <span className="block py-4 font-medium tracki text-center leading-loose text-gray-600">
              First of all, you must be a member of our site. Each package is
              defined by the membership you have, so you cannot make a purchase
              without being a member. Make sure you write your channel name
              correctly while signing up. Because your package will be defined
              to your channel. (If you type it wrong, you can get support about
              changing the channel name from live support.) After you become a
              member, you can proceed to the payment step. Your package
              activates automatically. Our live support operators will check and
              activate your package (This process takes 1-2 minutes.) If you
              have a coupon code, enter your coupon code while making the
              purchase. After your package is activated, your panel login will
              open. Click for panel usage.
            </span>
          </div>
        </div>
        <div className="container mx-auto pb-8 flex flex-col justify-center items-center bg-gray-50">
          <div className="w-36 h-36 rounded-full flex items-center justify-center  bg-sky-50">
            <div className="w-24 h-24  text-sky-300">
              <FontAwesomeIcon icon={faMoneyCheckDollar} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900">
              How to use the Twitch Viewer Bot Panel?
            </h2>
            <span className="block py-4 font-medium tracki text-center leading-loose text-gray-600">
              Your two panel entries will be explained from the control panel.
              Bot control is the part where you can adjust your viewer count and
              viewer list. (The audience list is the section written by the
              people watching your broadcast.) The number of Turkish usernames
              you set will appear in your audience list. After setting the
              numbers you want, press start. When starting your bot from the
              panel, make sure your broadcast is open. If you start it while
              your stream is closed, the bots will recognize that your stream is
              down and will close. If you save your settings, you can start it
              directly when you start it again, without having to make the same
              settings. Chat Bot panel is the section where you can make chat
              bot settings. Here, you can open your chat bot and choose the
              topic you want, or you can create your own chat file and upload it
              to the system. If you are going to prepare your chat file, you can
              request the sample file from our live support team. The file
              should be in txt format and sentences should be written one after
              the other. We recommend having at least 500 rows. The fewer lines
              there are, the sooner the messages will begin to repeat. You can
              also adjust the message frequency from the same panel. Mesah
              frequency means the time frequency of the messages to be written
              in your chat and is in seconds. For example, if you choose 30; 1
              message will be sent to your chat every 30 seconds. Again, if you
              save your settings in the chat bot panel, you can start it
              directly without the need to make the same settings when you start
              it again.
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="grid gap-4 py-8 lg:grid-cols-3 bg-gray-50">
          <div className="flex items-center flex-col px-4">
            <div className="w-24 h-24 rounded-full flex items-center justify-center  bg-sky-50">
              <div className="w-12 h-12  text-sky-300">
                <FontAwesomeIcon icon={faFileCode} />
              </div>
            </div>
            <h2 className="text-xl py-4 font-bold text-center text-gray-900">
              Will I download any program to my computer?
            </h2>
            <span className="block py-4 font-medium tracki text-center leading-loose text-gray-600">
              You do not need to download any software for any product on our
              website. All transactions are done from the panels on our website.
              Programs will cause you to be banned / blacklisted. In addition,
              it harms your computer. Making all transactions through our
              website protects your channel and your computer from bad results.
            </span>
          </div>
          <div className="flex items-center flex-col px-4">
            <div className="w-24 h-24 rounded-full flex items-center justify-center  bg-sky-50">
              <div className="w-12 h-12  text-sky-300">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </div>
            <h2 className="text-xl py-4  font-bold text-center text-gray-900">
              How to use Youtube Viewer Bot Panel?
            </h2>
            <span className="block py-4 font-medium tracki text-center leading-loose text-gray-600">
              After the purchase, your control panel login will be announced.
              You can start your bot by entering the Stream ID from the bot
              control. Stream ID is the 11-digit letters and numbers after the
              “=” of the broadcast link. For example,
              https://www.youtube.com/watch?v= “L0oFc1tBAug” Please note that if
              you enter the broadcast link of a channel other than your own
              channel, you will be suspended from the system for 5 days.
            </span>
          </div>
          <div className="flex  items-center flex-col px-4">
            <div className="w-24 h-24 rounded-full flex items-center justify-center  bg-sky-50">
              <div className="w-12 h-12  text-sky-300">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
            </div>
            <h2 className="text-xl py-4  font-bold text-center text-gray-900">
              What is the risk of getting banned when I use a Twitch viewer bot?
            </h2>
            <span className="block py-4 font-medium tracki text-center leading-loose text-gray-600">
              We do not ask you to download any program in any package you
              receive. All transactions are done from the control panel on our
              website. Programs will cause you to be banned/blacklisted. No
              programs, no viruses, no bans/blacklists.
            </span>
          </div>
          <div className="flex items-center flex-col px-4">
            <div className="w-24 h-24 rounded-full flex items-center justify-center  bg-sky-50">
              <div className="w-12 h-12  text-sky-300">
                <FontAwesomeIcon icon={faRocket} />
              </div>
            </div>
            <h2 className="text-xl py-4  font-bold text-center text-gray-900">
              What is the Host addon package?
            </h2>
            <span className="block py-4 font-medium tracki text-center leading-loose text-gray-600">
              Our Twitch viewer bot products do not include a host feature. If
              you assign a host, your bot will understand this and shut down. If
              you want to host, you can buy a host plugin and use it. The usage
              steps are written on the hosting panel. Follow the steps there.
              The duration of the package is defined for your membership as 1
              month. If your follower bot package expires earlier, you can renew
              your package and continue to use your follower-specific add-on
              and/or host at add-on package with your new package.
            </span>
          </div>
          <div className="flex items-center flex-col px-4">
            <div className="w-24 h-24 rounded-full flex items-center justify-center  bg-sky-50">
              <div className="w-12 h-12  text-sky-300">
                <FontAwesomeIcon icon={faClockRotateLeft} />
              </div>
            </div>
            <h2 className="text-xl py-4  font-bold text-center text-gray-900">
              What is the Timeout?
            </h2>
            <span className="block py-4 font-medium tracki text-center leading-loose text-gray-600">
              Timeout; This is the time you have to wait before you can start a
              bot again after starting a bot. It may differ for each product or
              package. The reason for the timeout is to prevent spam. Otherwise,
              the system is spammed with abuse by some users, which affects the
              use of other users. For all these reasons, there is a timeout on
              the panel.
            </span>
          </div>
          <div className="flex items-center flex-col px-4">
            <div className="w-24 h-24 rounded-full flex items-center justify-center  bg-sky-50">
              <div className="w-12 h-12  text-sky-300">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
            </div>
            <h2 className="text-xl py-4  font-bold text-center text-gray-900">
              How do you ensure security and privacy? How can I trust you?
            </h2>
            <span className="block py-4 font-medium tracki text-center leading-loose text-gray-600">
              First of all, we should say that due to our privacy policy, your
              membership information and channel name will not be shared with
              anyone. Confidentiality is the most important consideration for
              us. In addition, you do not need to download any program for any
              product on our site. Programs will cause you to be
              banned/blacklisted. It harms your computer. Any package you buy
              has nothing to do with your IP and your computer. Making all
              transactions through our website protects your channel and your
              computer from bad results.
            </span>
          </div>
          <div className="flex items-center flex-col px-4">
            <div className="w-24 h-24 rounded-full flex items-center justify-center  bg-sky-50">
              <div className="w-12 h-12  text-sky-300">
                <FontAwesomeIcon icon={faSackDollar} />
              </div>
            </div>
            <h2 className="text-xl py-4  font-bold text-center text-gray-900">
              Can I become an Affiliate and/or Partner with the Twitch live
              viewer bot?
            </h2>
            <span className="block py-4 font-medium tracki text-center leading-loose text-gray-600">
              You can participate using the Twitch viewer bot. There are many
              criteria that Twitch seeks to be a partner. The prerequisite is 75
              viewers. But Twitch takes care to be organic when looking at 75
              viewers. So, unfortunately, you cannot meet the 75 audience
              criteria with a bot. By using bots, you increase the number of
              viewers of your broadcast and rise to the top. Thus, you will
              attract organic viewers to your channel and you will complete the
              criterion by gaining 75 organic viewers over time. In other words,
              bots allow you to become a Partner indirectly, not directly.
            </span>
          </div>
          <div className="flex items-center flex-col px-4">
            <div className="w-24 h-24 rounded-full flex items-center justify-center  bg-sky-50">
              <div className="w-12 h-12  text-sky-300">
                <FontAwesomeIcon icon={faMedal} />
              </div>
            </div>
            <h2 className="text-xl py-4  font-bold text-center text-gray-900">
              What is the Follower-only Chat add-on package?
            </h2>
            <span className="block py-4 font-medium tracki text-center leading-loose text-gray-600">
              All our twitch viewer bot products include a chat bot feature.
              However, in order to use the chat bot feature, your chat must not
              be in the followers-only mode. If you want to use it in
              follower-only mode, you can purchase a follower-specific chat bot
              plugin and use it with your package. The duration of the package
              is defined for your membership as 1 month. If your follower bot
              package expires sooner, you can renew your package and continue to
              use your follower-only add-on package with your new package.
            </span>
          </div>
        </div>
      </section>
      <div className="text-center flex flex-col justify-center items-center bg-gray-50 py-16">
        <p className="text-2xl font-bold text-gray-900 w-2/3">
          If the Knowledge Base is insufficient for you, you can ask our Live
          Support operators what you are wondering 24/7.
        </p>
        <button className="px-8 py-3 my-8 font-semibold rounded-full bg-gray-800 text-gray-100 flex items-center">
          Live Support
          <FontAwesomeIcon className="w-4 h-4 ml-2" icon={faHeadset} />
        </button>
      </div>
    </main>
  );
};

export default page;
