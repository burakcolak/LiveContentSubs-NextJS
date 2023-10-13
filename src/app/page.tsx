import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faGaugeHigh,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import IconBox from "@/components/IconBox/IconBox";
import Features from "@/components/Sections/Features";
import Plans from "@/components/Sections/Plans";
import AlertComponent, { AlertTheme } from "@/components/Alerts/Alert";
import Faq from "@/components/Sections/Faq";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto space-y-16">
        <section>
          <h2 className="text-5xl font-bold lg:text-center text-gray-900">
            Be discoverable with the
            <br />
            Twitch Viewer Bot!
          </h2>
          <span className="block py-4 mb-2 text-xs font-medium tracki uppercase lg:text-center text-teal-600">
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
        <Features />
        <Plans />
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
              title="Usage Limit"
              description="The daily limit is 8 hours for Twitch and Youtube Viewer Bot. There is no monthly limit. You can use your bot every day for a total of 8 hours per day. Please read TOS."
            />
          </div>
        </section>
        <section className="text-gray-800">
          <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-gray-50">
            <Faq />
          </div>
        </section>
      </div>
    </main>
  );
}
