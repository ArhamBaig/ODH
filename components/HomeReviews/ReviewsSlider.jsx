"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Star} from "lucide-react"
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
                }
            },
            {
                breakpoint: 640,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                }
            }
        ]
      };

  return (
    <div className="order-last lg:order-first z-20">
    <Slider {...settings} >
        <Review heading={"LoREM IPSUM HEADING"} desc= {<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis corrupti nam nemo. Saepe atque laudantium corporis placeat. Aliquid modi nostrum aut molestias unde natus quae obcaecati hic sunt repellendus.</>} />
        <Review heading={"LoREM IPSUM HEADING"} desc= {<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis corrupti nam nemo. Saepe atque laudantium corporis placeat. Aliquid modi nostrum aut molestias unde natus quae obcaecati hic sunt repellendus.</>} />
        <Review heading={"LoREM IPSUM HEADING"} desc= {<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis corrupti nam nemo. Saepe atque laudantium corporis placeat. Aliquid modi nostrum aut molestias unde natus quae obcaecati hic sunt repellendus.</>} />
        <Review heading={"LoREM IPSUM HEADING"} desc= {<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis corrupti nam nemo. Saepe atque laudantium corporis placeat. Aliquid modi nostrum aut molestias unde natus quae obcaecati hic sunt repellendus.</>} />
        <Review heading={"LoREM IPSUM HEADING"} desc= {<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis corrupti nam nemo. Saepe atque laudantium corporis placeat. Aliquid modi nostrum aut molestias unde natus quae obcaecati hic sunt repellendus.</>} />

    </Slider>
    </div>
  )
}

const Review = ({heading, desc}) => {
    return(

        <div className="rounded-xl p-4 lg:p-8  bg-gradient-to-b from-gray-100 to-gray-200 mx-4 my-0 lg:my-4 max-w-xl lg:mx-auto h-[200px] sm:h-[240px]">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 lg:mb-3">{heading}</p>
            <div className="flex gap-x-1 mb-1">
            <Star className="text-secondary " fill="#f9cb50" />
            <Star className="text-secondary " fill="#f9cb50" />
            <Star className="text-secondary " fill="#f9cb50" />
            <Star className="text-secondary " fill="#f9cb50" />
            <Star className="text-secondary " fill="#f9cb50" />
            </div>
            <p className="text-sm lg:text-base lg:line-clamp-4">{desc}</p>
        </div>
    )
}

export default ReviewsSlider