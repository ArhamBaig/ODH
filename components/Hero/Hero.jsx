import React from "react";
import HeroForm from "./HeroForm";
import UniSlider from "./UniSlider";
import HeroButton from "./Button";
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-44 pb-16 lg:pb-24 bg-gradient-radial from-tertiary to-primary px-3 sm:px-10 md:px-16 2xl:px-36 justify-center items-center gap-x-4">
      <div className="max-w-3xl  text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-7">
          Top Notch Online Top Notch Online
        </h1>
        <p className="text-gray-200 text-md md:text-lg lg:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          voluptatem exercitationem quasi similique qui earum neque repellat
          voluptas quaerat et enim eum sunt corrupti, optio perspiciatis autem
          recusandae at laboriosam.
        </p>
        <div className="mt-8 gap-x-3 flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <div className="flex items-center justify-center">
            <button className="bg-secondary h-[54px] w-40 rounded-lg uppercase  mr-4 hover:opacity-90 transition-all">
              Order Now
            </button>
            <HeroButton />
          </div>
          <UniSlider />
        </div>
      </div>
      <HeroForm />
    </div>
  );
};

export default Hero;
