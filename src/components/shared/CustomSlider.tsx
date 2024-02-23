import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomSlider = ({dot=false,show=4,children}:{dot?:boolean,show?:number,children?:React.ReactNode}) => {
    var settings = {
        dots: dot,
        infinite: true,
        // speed: 500,
        slidesToShow: show,
        // slidesToScroll: show,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 2000,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='mt-10 '>
        <Slider {...settings}>
        {children}
      </Slider>
    </div>
  )
}

export default CustomSlider