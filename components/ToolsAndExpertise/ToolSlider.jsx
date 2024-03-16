"use client"
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ToolSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        draggable: false,
        pauseOnHover: false
        ,responsive: [
          {
            breakpoint: '640px',
            settings: {
              slidesToShow: 2
            }
          }
        ]
      };

  return (
    <div className="flex flex-col rounded-lg">
    <Slider {...settings}>
                <Image src={"/assets/tool1.png"} width={200} height={200} alt="Dissertation Writing Tool" className="px-2"/>
                <Image src={"/assets/tool2.png"} width={200} height={200} alt="Dissertation Writing Tool" className="px-2"/>
                <Image src={"/assets/tool3.png"} width={200} height={200} alt="Dissertation Writing Tool" className="px-2"/>
                <Image src={"/assets/tool4.png"} width={200} height={200} alt="Dissertation Writing Tool" className="px-2"/>
                <Image src={"/assets/tool5.png"} width={200} height={200} alt="Dissertation Writing Tool" className="px-2"/>
                <Image src={"/assets/tool6.png"} width={200} height={200} alt="Dissertation Writing Tool" className="px-2"/>
                <Image src={"/assets/tool7.png"} width={200} height={200} alt="Dissertation Writing Tool" className="px-2"/>
                <Image src={"/assets/tool8.png"} width={200} height={200} alt="Dissertation Writing Tool" className="px-2"/>
    </Slider>
    </div>
  )
}

export default ToolSlider