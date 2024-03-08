"use client"
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const UniSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        draggable: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: '640px',
            settings: {
              slidesToShow: 2
            }
          }
        ]
      };

  return (
    <div className="shadow-inset bg-white flex flex-col py-3 lg:py-6 rounded-lg mt-5 lg:mt-12 w-[340px] sm:w-[580px] lg:w-[580px] xl:w-[700px] h-[90px] sm:h-[100px] lg:h-[127px]">
    <Slider {...settings}>
                <Image src={"/assets/Universities Logos-01.png"} width={200} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-02.png"} width={200} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-03.png"} width={200} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-04.png"} width={200} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-05.png"} width={200} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-06.png"} width={200} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-07.png"} width={200} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-08.png"} width={200} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-09.png"} width={200} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-10.png"} width={200} height={200} alt="university logo" className="px-2"/>
    </Slider>
    </div>
  )
}

export default UniSlider