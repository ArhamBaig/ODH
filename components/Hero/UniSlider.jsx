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
        pauseOnHover: false
      };

  return (
    <div className="shadow-inset bg-white flex flex-col py-5 rounded-lg mt-12">
    <Slider {...settings}>
                <Image src={"/assets/Universities Logos-01.png"} width={300} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-02.png"} width={300} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-03.png"} width={300} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-04.png"} width={300} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-05.png"} width={300} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-06.png"} width={300} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-07.png"} width={300} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-08.png"} width={300} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-09.png"} width={300} height={200} alt="university logo" className="px-2"/>
                <Image src={"/assets/Universities Logos-10.png"} width={300} height={200} alt="university logo" className="px-2"/>
    </Slider>
    </div>
  )
}

export default UniSlider