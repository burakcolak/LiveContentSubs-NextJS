import React from "react";
import AlertComponent, { AlertTheme } from "@/components/Alerts/Alert";

const AlertSection = () => {
  return (
    <section className="grid m-8">
      <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-gray-50">
        <AlertComponent
          theme={AlertTheme.Warning}
          title="Need More Viewers?"
          description="We offer up to 500 viewers as pre-packages. If you need more than 500 viewers, you can get a quote from our Live Support team right away."
        />
        <AlertComponent
          className="pt-4"
          theme={AlertTheme.Info}
          title="Usage Limit"
          description="The daily limit is 8 hours for Twitch and Youtube Viewer Bot. There is no monthly limit. You can use your bot every day for a total of 8 hours per day. Please read TOS."
        />
      </div>
    </section>
  );
};

export default AlertSection;
