"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, CircleUserRound } from "lucide-react";
const Reviews = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style,background: "#075264", borderRadius: "9999px", display:"flex", alignItems:"center", justifyContent:"center", width:"25px", height: "25px"  }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style,background: "#075264", borderRadius: "9999px", display:"flex", alignItems:"center", justifyContent:"center", width:"25px", height: "25px"  }}
            onClick={onClick}
          />
        );
      }
      
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    fade: true,
    };

    
  return (
    <div className="container mx-auto py-16 px-2">
      <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl capitalize text-primary max-w-4xl text-center lg:text-left">
        Here&apos;s What <span className="text-siteorange">Our Clients</span>{" "}
        think of our dissertation writing services
      </h3>
      <div className="grid grid-cols-3 justify-center items-center max-w-xl mx-auto my-8 sm:my-12 md:my-16 p-4">
        <div className="justify-between items-center flex flex-col border-r border-gray-700 pr-4 gap-y-1">
          <Image
            src="/assets/tool1.png"
            alt="review"
            width={140}
            height={140}
            className="object-contain"
          />
          <p className="font-light text-lg sm:text-xl">9.2 Rating</p>
        </div>
        <div className="justify-between items-center flex flex-col px-2 gap-y-1">
          <Image
            src="/assets/tool2.png"
            alt="review"
            width={140}
            height={140}
            className="object-contain"
          />
          <p className="font-light text-lg sm:text-xl">9.2 Rating</p>
        </div>
        <div className="justify-between items-center flex flex-col border-l border-gray-700 pl-4 gap-y-1">
          <Image
            src="/assets/tool3.png"
            alt="review"
            width={140}
            height={140}
            className="object-contain"
          />
          <p className="font-light text-lg sm:text-xl">9.2 Rating</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto w-[80vw]">
        <Slider {...settings}>
          {reviews.map((review) => {
            return <ReviewCard key={review.id} id={review.id} heading={review.heading} review={review.review}/>;
          })}
        </Slider>
      </div>
    </div>
  );
};

const ReviewCard = ({ id, heading, review }) => {
  return (
    <div className="p-5 border-2 border-primary rounded-3xl flex flex-col md:flex-row mx-3 justify-center items-center">
      <div className="w-[150px]">
     <CircleUserRound className="w-36 h-36 text-primary" />
     </div>
      <div className="flex flex-col justify-center items-center md:items-start">
        <p className="text-sm italic">{id}</p>
        <div className="flex">
          <Star className="text-yellow-500" fill="rgb(234 179 8)" />
          <Star className="text-yellow-500" fill="rgb(234 179 8)" />
          <Star className="text-yellow-500" fill="rgb(234 179 8)" />
          <Star className="text-yellow-500" fill="rgb(234 179 8)" />
          <Star className="text-yellow-500" fill="rgb(234 179 8)" />
        </div>
        <p className="text-xl font-bold text-primary text-center md:text-left ">{heading}</p>
        <p className="text-gray-800 text-center md:text-left text-sm">{review}</p>
      </div>
    </div>
  );
};

const reviews = [
    {
      id: "57e1d0a7-3842",
      name: "John Doe",
      heading: "Excellent Service",
      review:
        "Great service! I received my dissertation on time and it was exceptionally well-written. The customer support was also very helpful throughout the process. I would definitely recommend this service to anyone in need of quality writing assistance.",
    },
    {
      id: "a34f154c-81b3",
      name: "Jane Smith",
      heading: "Professionalism at its best",
      review:
        "I'm impressed with the professionalism of the writers. They understood my requirements perfectly. The final document was meticulously researched and flawlessly written. I will certainly be using their services again in the future.",
    },
    {
      id: "c9575272-22fd",
      name: "Alice Johnson",
      heading: "Exceeded Expectations",
      review: "The quality of work exceeded my expectations. Highly recommended! The writers went above and beyond to deliver an exceptional dissertation that impressed both me and my professors.",
    },
    {
      id: "3d7d41a5-ea77",
      name: "Bob Williams",
      heading: "Responsive and Efficient",
      review:
        "Quick response and excellent communication throughout the process. Will definitely use again. The team was very responsive to my needs and delivered the completed dissertation ahead of schedule. Their efficiency saved me a lot of time and stress.",
    },
    {
      id: "e2cc77e5-5755",
      name: "Emily Brown",
      heading: "Outstanding Service",
      review:
        "Outstanding dissertation writing service. Helped me immensely in my academic journey. The writers demonstrated a deep understanding of the subject matter and produced a well-researched and comprehensive dissertation. I couldn't have asked for a better service.",
    },
  ];
  

export default Reviews;
