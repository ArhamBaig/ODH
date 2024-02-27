import React from "react";
import HeroForm from "./HeroForm";
import UniSlider from "./UniSlider";
import { Button } from "../ui/moving-border";
import HeroButton from "./Button";
const Hero = () => {
  return (
    <div className="flex py-24 bg-gradient-radial from-tertiary to-primary px-36 justify-center items-center ">
      <div className="max-w-3xl ">
        <h1 className="text-6xl text-white font-bold mb-7">
          Top Notch Online Top Notch Online 
        </h1>
        <p className="text-gray-200 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptatem exercitationem quasi similique qui earum neque repellat voluptas quaerat et enim eum sunt corrupti, optio perspiciatis autem recusandae at laboriosam.</p>
        <div className="mt-8 gap-x-3">
        <button className="bg-secondary h-[52px] w-40 rounded-lg uppercase  mr-4 hover:opacity-90 transition-all">Order Now</button>
        <HeroButton />
        <UniSlider/>
        </div>
      </div>
        <HeroForm />
    </div>
  );
};

export default Hero;
