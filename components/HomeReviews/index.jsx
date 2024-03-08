import React from "react";
import ReviewsSlider from "./ReviewsSlider";
import { Spotlight } from "../ui/spotlight";

const HomeReviews = () => {
  return (
    <div className="overflow-hidden gap-x-2 relative bg-gradient-to-b from-primary to-tertiary lg:px-6 xl:px-24 grid grid-cols grid-cols-1 lg:grid-cols-2 justify-center items-center mb-24 h-[600px]">
      <div className="bg-grid-tertiary/[0.2] absolute h-full w-full top-0 left-0"></div>
        <ReviewsSlider />
      <div className=" relative h-full flex flex-col justify-center items-center text-transparent bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text ">
        <Spotlight
          className=" -top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">4.9/5 REVIEWS</p>
        <p className="text-center text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed
          inventore enim officiis odio ea, fuga ad sapiente voluptatem esse
          consectetur iste neque obcaecati deleniti quos velit cupiditate cum
          minus.
        </p>
      </div>
    </div>
  );
};

export default HomeReviews;
