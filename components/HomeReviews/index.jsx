import React from "react";
import ReviewsSlider from "./ReviewsSlider";
import { Spotlight } from "../ui/spotlight";

const HomeReviews = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary to-tertiary px-24 grid grid-cols-2 justify-center items-center mb-24">
        <div className="bg-grid-tertiary/[0.2] absolute h-full w-full top-0 left-0">
            
        </div>


      <div>
        <ReviewsSlider />
      </div>
      <div className="relative h-full flex flex-col justify-center items-center text-transparent bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <p className="font-bold text-7xl mb-4">4.9/5 REVIEWS</p>
        <p className="text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sed inventore enim officiis odio ea, fuga ad sapiente voluptatem esse consectetur iste neque obcaecati deleniti quos velit cupiditate cum minus.</p>
      </div>
    </div>
  );
};

export default HomeReviews;
