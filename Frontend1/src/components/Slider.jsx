


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import Image1 from "../assets/23.png";
import Image2 from "../assets/24.png";
import Image3 from "../assets/25.png";
import Image4 from "../assets/26.png";
import Image5 from "../assets/ayushbanner-5.jpg";
import Image6 from "../assets/ayushbanner-6.jpg";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-[100%]">
      <Swiper
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-navigation-color": "#FFFFFF",
        }}
        spaceBetween={50}
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src={Image1}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] object-cover"
              alt="Slide 1"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src={Image2}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] object-cover"
              alt="Slide 2"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src={Image3}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] object-cover"
              alt="Slide 3"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src={Image4}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] object-cover"
              alt="Slide 4"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src={Image5}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] object-cover"
              alt="Slide 5"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src={Image6}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] object-cover"
              alt="Slide 6"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
