"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        pauseOnHover: false,
        vertical: true,
      };

  return (
    <Slider {...settings}>
        <Review heading={"LoREM IPSUM HEADING"} desc= {<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis corrupti nam nemo. Saepe atque laudantium corporis placeat. Aliquid modi nostrum aut molestias unde natus quae obcaecati hic sunt repellendus.</>} />
        <Review heading={"LoREM IPSUM HEADING"} desc= {<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis corrupti nam nemo. Saepe atque laudantium corporis placeat. Aliquid modi nostrum aut molestias unde natus quae obcaecati hic sunt repellendus.</>} />
        <Review heading={"LoREM IPSUM HEADING"} desc= {<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis corrupti nam nemo. Saepe atque laudantium corporis placeat. Aliquid modi nostrum aut molestias unde natus quae obcaecati hic sunt repellendus.</>} />
        <Review heading={"LoREM IPSUM HEADING"} desc= {<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis corrupti nam nemo. Saepe atque laudantium corporis placeat. Aliquid modi nostrum aut molestias unde natus quae obcaecati hic sunt repellendus.</>} />
        <Review heading={"LoREM IPSUM HEADING"} desc= {<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis corrupti nam nemo. Saepe atque laudantium corporis placeat. Aliquid modi nostrum aut molestias unde natus quae obcaecati hic sunt repellendus.</>} />

    </Slider>
  )
}

const Review = ({heading, desc}) => {
    return(

        <div className="rounded-xl p-8  bg-gradient-to-b from-gray-100 to-gray-200 shadow-xl my-4 max-w-xl mx-auto h-[240px]">
            <p className="text-4xl font-bold mb-4">{heading}</p>
            
            <p>{desc}</p>
        </div>
    )
}

export default ReviewsSlider