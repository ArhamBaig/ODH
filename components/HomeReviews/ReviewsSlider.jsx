"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";
const ReviewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    draggable: false,
    pauseOnHover: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          vertical: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="order-last lg:order-first z-20">
      <Slider {...settings}>
        <Review
          heading={"Gavin Price"}
          desc={
            <>
              I was in search of quality assistance and found Online
              Dissertation Help. The entire process, from inquiry to submission,
              proved their professionalism and dedication. Impressive!
            </>
          }
        />
        <Review
          heading={"Natalie Hills"}
          desc={
            <>
              My dissertation was more like a survival reality show, and I was
              ready to tap out. Online Dissertation Help enabled me to make it
              to the end and win. Couldn&#39;t have done it without them!
            </>
          }
        />
        <Review
          heading={"Abigail Abraham"}
          desc={<>Easy-to-go and effective dissertation help! Appreciated!</>}
        />
        <Review
          heading={"Felix Bailey"}
          desc={
            <>
              Much satisfied with the overall experience. Their prices are worth
              it!
            </>
          }
        />
        <Review
          heading={"Vincent Rogers"}
          desc={
            <>
              I have taken dissertation assistance from these guys more than
              twice: for the proposal, for topic selection, and then for the
              literature review. Every time, they amaze me with their genuine
              support. Recommended to all students in need!
            </>
          }
        />
      </Slider>
    </div>
  );
};

const Review = ({ heading, desc }) => {
  return (
    <div className="rounded-xl p-4 lg:p-8  bg-gradient-to-b from-gray-100 to-gray-200 mx-4 my-0 lg:my-4 max-w-xl lg:mx-auto h-[200px] sm:h-[240px]">
      <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 lg:mb-3">
        {heading}
      </p>
      <div className="flex gap-x-1 mb-1">
        <Star className="text-secondary " fill="#f9cb50" />
        <Star className="text-secondary " fill="#f9cb50" />
        <Star className="text-secondary " fill="#f9cb50" />
        <Star className="text-secondary " fill="#f9cb50" />
        <Star className="text-secondary " fill="#f9cb50" />
      </div>
      <p className="text-sm lg:text-base lg:line-clamp-4">{desc}</p>
    </div>
  );
};

export default ReviewsSlider;
