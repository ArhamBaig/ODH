import DissertationSteps from "@/components/DissertationSteps";
import DissertationStructure from "@/components/DissertationStructure";
import Hero from "@/components/Hero/Hero";
import HomeBanner from "@/components/HomeBanner";
import HomeReviews from "@/components/HomeReviews";
import SecondComponent from "@/components/videoComponent/secondComponent";

export default function Home() {
  return (
    <>
    <Hero />
    <SecondComponent />

    <DissertationStructure />
    <HomeBanner />
    {/* <DissertationSteps /> */}
    <HomeReviews />
    </>
  );
}
