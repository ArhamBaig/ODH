"use client"
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FormSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        cssEase: "linear",
        arrows: true,
        pauseOnHover: true,
     
      };
  return (
    <div className='w-[320px] sm:w-[550px] mx-auto '>
        <Slider {...settings}>
            <SliderCard image={"/assets/topic-1.png"}/>
            <SliderCard image={"/assets/topic-2.png"}/>
            <SliderCard image={"/assets/topic-3.png"}/>
            <SliderCard image={"/assets/topic-4.png"}/>
            <SliderCard image={"/assets/topic-5.png"}/>
        </Slider>
    </div>
  )
}

const SliderCard = ({image}) => {
    return(
        <div className="rounded-2xl shadow-lg p-4 bg-gray-50 mx-3 h-[400px] my-4 flex flex-col justify-center items-center">
            <Image src={image} alt="asd" width={200} height={200} className=""/>
            <p className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita error corporis vitae enim nisi autem explicabo optio officia beatae tempora impedit placeat vero, eos, soluta commodi fugit natus sequi? Quaerat alias eaque omnis quam accusantium libero reprehenderit! Omnis fugit libero est culpa consequuntur quos quasi eaque harum officiis autem, aspernatur unde placeat vitae deserunt quis rerum doloribus, architecto vel.
            </p>
        </div>
    )
}

export default FormSlider