"use client";
import React from "react";
import CardStack from "./CardStack";
import { Button } from "../ui/moving-border";
import DissertationButton from "./Button";

const DissertationStructure = () => {
  return (
    <div className="relative grid lg:grid-cols-2 justify-center bg-primary text-white pb-20 lg:py-24 px-4 xl:px-24">
      <div className="lg:sticky lg:top-52 mt-16 md:mt-24 h-fit flex flex-col justify-center items-center lg:justify-left lg:items-start">
        <h2 className="heading mb-8 sm:mb-12 md:mb-16">
          Online Dissertation Help – Pinning Perfection in Every Page!
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-4 ">
          How do you balance the never-ending demands of your dissertation with
          the rest of your life? Difficult question, right? We know it is
          unmanageable for you; despite this, if you are still on a solo
          survival, you really deserve a salute! But from now on, you don&#39;t
          have to survive alone; you&#39;re going to thrive with the most
          trusted dissertation help professionals. Yes, because
          OnlineDissertationHelp has already entered the scene!
        </p>
        <p className="text-sm sm:text-base md:text-lg mt-4">
          With years of experience in the academic writing domain,
          OnlineDissertationHelp has been instrumental in empowering students to
          attain their educational aspirations. Established in 2012, our legacy
          has been defined by a commitment to excellence and a steadfast
          dedication to student success.
        </p>
        <p className="text-sm sm:text-base md:text-lg mt-4">
          At the heart of our phenomenal record lies the efforts of our 500+
          dissertation experts. Their expertise not only ensures the delivery of
          high-quality dissertation assistance but also reflects our dedication
          to academic integrity and scholarly excellence. Our vision is to serve
          as a pillar of academic support for students breaking down the
          challenges of academic writing.
        </p>
        <div className="flex gap-x-4 mt-7">
          <button className="bg-secondary h-[54px] w-40 rounded-lg uppercase hover:opacity-90 transition-all">
            Get A Discount
          </button>
          <DissertationButton />
        </div>
      </div>
      <CardStack />
    </div>
  );
};

export default DissertationStructure;
