import FeatureSection from "@/components/Sections/Home/Features";
import PlanSection from "@/components/Sections/Home/Plans";
import FaqSection from "@/components/Sections/Home/Faq";
import HeroSection from "@/components/Sections/Home/Hero";
import AlertSection from "@/components/Sections/Home/Alert";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <HeroSection />
        <FeatureSection />
        <PlanSection />
        <AlertSection />
        <FaqSection />
      </div>
    </main>
  );
}
