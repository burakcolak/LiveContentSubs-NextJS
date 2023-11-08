import IconBox from "@/components/IconBox/IconBox";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faGaugeHigh,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section>
      <h2 className="text-5xl font-bold lg:text-center pt-8 text-gray-900">
        Be discoverable with the
        <br />
        Twitch Viewer Bot!
      </h2>
      <span className="block py-4 mb-2 font-medium uppercase lg:text-center text-teal-600">
        Use our viewbotting on twitch and chat bot to hype your channel
        <br />
        and meet the most professional twitch view bot ever developed.
      </span>
      <div className="grid gap-4 px-32 my-16 lg:grid-cols-3">
        <IconBox
          icon={<FontAwesomeIcon icon={faRocket} size="2x" />}
          text="RankUp!"
        />
        <IconBox
          icon={<FontAwesomeIcon icon={faGaugeHigh} size="2x" />}
          text="Reach New Viewers"
        />
        <IconBox
          icon={<FontAwesomeIcon icon={faCircleCheck} size="2x" />}
          text="Be Popular!!"
        />
      </div>
    </section>
  );
};

export default HeroSection;
