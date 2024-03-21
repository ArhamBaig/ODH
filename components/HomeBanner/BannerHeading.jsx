"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import Image from 'next/image'
import Link from "next/link";
const BannerHeading = () => {
  return (
    <LampContainer className={"relative "}>
    <motion.h2
      initial={{ opacity: 0.5, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-700 to-slate-900 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl "
    >
      Find Your Assignment Cost
      
     
  
 
    </motion.h2>
    <div className="absolute -bottom-44 jutsify-center items-center flex flex-col gap-y-6">
      <div className="flex justify-center items-center gap-x-2 sm:gap-x-4">
        <Image src={"/assets/mastercard-logo.png"} width={100} height={90} alt="mastercard payment method" className="w-[70px] sm:w-[100px]"/>
        <Image src={"/assets/paypal-logo.png"} width={100} height={90} alt="mastercard payment method" className="w-[70px] sm:w-[100px]"/>
        <Image src={"/assets/Visa-logo.png"} width={100} height={90} alt="mastercard payment method" className="w-[70px] sm:w-[100px]"/>
        <Image src={"/assets/wise-logo.png"} width={100} height={90} alt="mastercard payment method" className="w-[70px] sm:w-[100px]"/>
      </div>
    <Link href={"/order"} className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#013947,45%,#075264,55%,#013947)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none">
          Order Now
        </Link>
        </div>
  </LampContainer>
  )
}

export default BannerHeading