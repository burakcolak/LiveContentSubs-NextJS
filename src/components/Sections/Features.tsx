import React from "react";
import StableIcon from "../Svgs/Stable";
import DashboardIcon from "../Svgs/Dashboard";
import ChatBotIcon from "../Svgs/ChatBot";
import PieChartIcon from "../Svgs/PieChart";
import BarChartIcon from "../Svgs/BarChart";

function Features() {
  return (
    <section className="m-4 md:m-8 bg-gray-50 text-gray-800 py-8">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">
          EXPLORE BEST VIEW BOT TWITCH FEATURES
        </h2>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <StableIcon />
          <h3 className="my-3 text-3xl font-semibold">More Stable</h3>
          <div className="space-y-1 leadi">
            <p>We provide faster and more stable bot</p>
            <p>responses with the latest V7 update.</p>
            <p>Delay and fluctuation optimization.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <DashboardIcon />
          <h3 className="my-3 text-3xl font-semibold">Easy to Use Dashboard</h3>
          <div className="space-y-1 leadi">
            <p>We have the most advanced dashboard for</p>
            <p>managing your Twitch Viewbot, Channel views,</p>
            <p>Followers and Chatlist.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <ChatBotIcon />
          <h3 className="my-3 text-3xl font-semibold">Integrated Chat Bot</h3>
          <div className="space-y-1 leadi">
            <p>With the integrated Twitch Chat Bot, you can</p>
            <p>use ready-made chat topics.</p>
            <p>(Chat bot service is under update)</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <PieChartIcon />
          <h3 className="my-3 text-3xl font-semibold">
            Adjustable Viewer Counter
          </h3>
          <div className="space-y-1 leadi">
            <p>You can set the number of viewers</p>
            <p>within the range supported by your package</p>
            <p>and then change the number.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <BarChartIcon />
          <h3 className="my-3 text-3xl font-semibold">Fluctuation</h3>
          <div className="space-y-1 leadi">
            <p>Fluctuation and drop rate in Twitch View Bot</p>
            <p>has been reduced to 5%.</p>
            <p>The server uptime rate is fixed at 99%.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <h3 className="my-3 text-3xl font-semibold">
            No Programs & No Virus
          </h3>
          <div className="space-y-1 leadi">
            <p>We have the most advanced dashboard for</p>
            <p>managing your Twitch Viewbot,</p>
            <p>Channel views, Followers and Chatlist.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
