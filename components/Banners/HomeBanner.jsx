import Image from "next/image";
import React from "react";

const HomeBanner2 = () => {
  return (
    <div className="flex justify-center items-center bg-primary pt-10 mt-20">
      <div className="w-[80vw] sm:w-[60vw] border flex lg:flex-row flex-col gap-x-5 gap-y-6 justify-between px-20 items-center p-5 rounded-t-xl bg-white">
        <p className="text-3xl lg:text-4xl xl:text-5xl text-primary font-[900] tracking-widest max-w-lg">READY TO PLACE YOUR ORDER?</p>
        <Image 
        src={"/assets/banner_image.png"}
        width={230}
        height={230}
        alt="Dissertation picture"
        
        />
      </div>
    </div>
  );
};

export default HomeBanner2;
