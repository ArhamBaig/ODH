import React from "react";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <div className="flex py-24 bg-gradient-radial from-tertiary to-primary px-36 justify-center items-center">
      <div className="max-w-3xl ">
        <h1 className="text-5xl text-white font-bold mb-7">
          Top Notch Online Dissertation Help London
        </h1>
        <p className="text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptatem exercitationem quasi similique qui earum neque repellat voluptas quaerat et enim eum sunt corrupti, optio perspiciatis autem recusandae at laboriosam.</p>
        <div className="mt-8 gap-x-3">
        <button className="bg-secondary p-2 px-2 rounded-lg font-bold w-[150px]">Order Now</button>
        <button className="bg-secondary p-2 px-2 rounded-lg font-bold w-[150px]">Request a Quote</button>
        </div>
      </div>
        <HeroForm />
    </div>
  );
};

export default Hero;
