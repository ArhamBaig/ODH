"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";
export const AnimatedTooltip = ({ items }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#075264",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "25px",
          height: "25px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#075264",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "25px",
          height: "25px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
   
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 100,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
       
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          initialSlide: 2
        }
      },

    ],
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      <div className="w-[80vw] sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
        <Slider {...settings}>
          {items.map((item, idx) => (
            <div
              className="-mr-4 relative group"
              key={item.name}
              onMouseEnter={() => setHoveredIndex(item.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence mode="wait">
                {hoveredIndex === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 10,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,
                      rotate: rotate,
                      whiteSpace: "nowrap",
                    }}  
                    className="absolute top-12 left-[100px] lg:left-[135px] xl:left-[125px] 2xl:left-[156px] translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-20 shadow-xl px-4 py-2 w-[165px]"
                  >
                    <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-siteorange to-transparent h-px " />
                    <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-siteorange to-transparent h-px " />
                    <div className="font-bold text-white relative z-30 text-base">
                      {item.name}
                    </div>
                    <div className="text-white text-xs">{item.designation}</div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="rounded-3xl p-4 flex flex-col justify-between items-center mx-auto w-[270px] sm:w-[300px] lg:w-[350px] 2xl:w-[400px] h-[440px] lg:h-[400px] mt-44 border border-black">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={130}
                    height={130}
                    className=" rounded-full border-2 border-white -mt-24 "
                    onMouseMove={handleMouseMove}
                  />
                <div className="flex gap-x-1 mt-4">
                  <Star className="text-secondary" fill="#f9cb50" />
                  <Star className="text-secondary" fill="#f9cb50" />
                  <Star className="text-secondary" fill="#f9cb50" />
                  <Star className="text-secondary" fill="#f9cb50" />
                  <Star className="text-secondary" fill="#f9cb50" />
                </div>
                <p className="text-center leading-4 sm:leading-tight mt-3 text-sm">
                  {item.desc}
                </p>
                <button className="border border-gray-700 hover:bg-secondary text-gray-800 px-4 p-3 mt-4 rounded-xl transition-all">
                  Live Chat
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
