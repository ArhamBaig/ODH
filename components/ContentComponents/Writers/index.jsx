"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, GraduationCap, BookA, Circle } from "lucide-react";
const Writers = ({ experts }) => {
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
    speed: 300,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 my-16 justify-center items-center">
      <h2 className="font-bold text-primary text-4xl max-w-5xl capitalize mb-4">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
        tempora.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore
        dignissimos id delectus dolorem quia incidunt recusandae, dolor
        voluptates facilis, perspiciatis non qui nam, temporibus quibusdam
        dolore fuga nisi? Quasi nesciunt ipsam eaque aut necessitatibus!
      </p>
      <div className="max-w-7xl mx-auto w-[80vw]">
        <Slider {...settings}>
          {experts.map((expert) => {
            return (
              <WriterCard
                key={expert.name}
                image={expert.image}
                name={expert.name}
                ratingCount={expert.ratingCount}
                degree={expert.degree}
                orders={expert.degree}
                specialization={expert.specialization}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const WriterCard = ({
  name,
  image,
  alt,
  ratingCount,
  degree,
  orders,
  specialization,
}) => {
  return (
    <div className="border border-gray-200 rounded-2xl flex flex-col lg:max-w-none lg:basis-1/2 xl:basis-1/3 px-4 shadow-lg  h-[450px] sm:h-[350px]  items-center justify-center select-none my-10 mb-4 gap-y-4 p-4 mx-2">
      <div className="rounded-full flex flex-col sm:flex-row justify-center items-center gap-x-4">
        <Image src={image} alt={alt} width={100} height={100} />
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start gap-y-1">
          <p className="font-semibold text-2xl mb-1">{name}</p>
          <p className="flex justify-center items-center">
            <span className="font-bold text-sm">5.0 </span>
            <Star
              className="w-3 h-3 mx-[1px] text-yellow-500 my-auto"
              fill="rgb(234 179 8)"
            />
            <Star
              className="w-3 h-3 mx-[1px] text-yellow-500 my-auto"
              fill="rgb(234 179 8)"
            />
            <Star
              className="w-3 h-3 mx-[1px] text-yellow-500 my-auto"
              fill="rgb(234 179 8)"
            />
            <Star
              className="w-3 h-3 mx-[1px] text-yellow-500 my-auto"
              fill="rgb(234 179 8)"
            />
            <Star
              className="w-3 h-3 mx-[1px] text-yellow-500 my-auto"
              fill="rgb(234 179 8)"
            />
            <span className="font-light text-sm">{`(${ratingCount})`}</span>
          </p>
          <p className="flex justify-center items-center text-xs bg-rose-50 rounded-full w-fit px-2 py-[2px]">
            <Circle
              className="h-[14px] w-[14px] mr-1 text-green-600"
              fill="rgb(22 163 74)"
            />{" "}
            Writer Available
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-y-2 gap-x-4 border-b-2 pb-4 w-full">
        <div className="flex gap-x-2 sm:justify-center sm:items-center">
          <GraduationCap className="w-14 h-14 bg-rose-50 p-2 rounded-3xl text-primary " />
          <div className="flex flex-col">
            <p className="font-bold text-xl">{degree}</p>
            <p className="text-gray-600 text-sm">degree</p>
          </div>
        </div>
        <div className="flex gap-x-2 sm:justify-center sm:items-center">
          <BookA className="w-14 h-14 bg-rose-50 p-2 rounded-3xl text-primary " />
          <div className="flex flex-col">
            <p className="font-bold text-xl">{orders}</p>
            <p className="text-gray-600 text-sm">orders</p>
          </div>
        </div>
      </div>
      <div className="sm:flex flex-wrap text-xs gap-x-1 hidden">
        {specialization.map((course, index) => {
          return (
            <p key={index} className="bg-rose-50 p-1 rounded-full px-2">
              {course}
            </p>
          );
        })}
      </div>
      <button className="w-full py-3 button-hover-transition rounded-xl text-black delay-100 border border-primary transition-all hover:text-white">
        Hire Writer
      </button>
    </div>
  );
};

export default Writers;
