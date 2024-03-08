import DissertationStructure from "@/components/DissertationStructure";
import Hero from "@/components/Hero/Hero";
import HomeBanner from "@/components/HomeBanner";
import HomeReviews from "@/components/HomeReviews";
import SecondComponent from "@/components/videoComponent/secondComponent";
import Services from "@/components/Services";
import Writers from "@/components/Writers";
import Procedure from "@/components/Procedure/page";
import HomeContent from "@/components/HomeContent/page";
import ToolsandExpertise from "@/components/ToolsAndExpertise/page";
import Referencing from "@/components/Referencing/page";
import PaymentSteps from "@/components/PaymentSteps/page";
import HomeBanner2 from "@/components/Banners/HomeBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <SecondComponent />

      <DissertationStructure />
      <HomeBanner />

      {/* <Services /> */}
      <HomeReviews />
      <Procedure />
      <HomeContent />
      <ToolsandExpertise />
      <Referencing />
      <PaymentSteps />
      <Writers />
      <HomeBanner2 />

    </>
  );
}
