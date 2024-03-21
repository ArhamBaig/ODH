"use client";
import React from "react";

import Image from "next/image";

const Whatsapp = () => {
  return (
    <div className="z-20 fixed bottom-4 left-5 flex items-center group gap-3 max-w-fit">
    <a
      href="http://wa.me/+447456380326"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-green-400 hover:bg-green-700 hover:scale-105 duration-300 rounded-full  h-11 w-11 sm:w-16 sm:h-16 flex justify-center items-center">
        <Image src={"/assets/whatsapp.png"} alt="whatsapp icon" className="p-1" height={50} width={50} />
      </div>
      </a>

   
    
  </div>
  );
};

export default Whatsapp;