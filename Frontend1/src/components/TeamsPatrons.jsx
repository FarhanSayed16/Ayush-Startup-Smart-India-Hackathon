


// waste
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import Image6 from '../assets/1.png';
import Image3 from '../assets/2.png';
import Image4 from '../assets/3.png';
import Image5 from '../assets/4.png';
import 'swiper/css/pagination'
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
const TeamsPatrons = () => {
  return (
    <div className=' max-w-[1350px] mx-auto pb-20 pt-10'>
    <div className='  py-4'>
      <p>Ministry of Ayush</p>
      <p className=' text-3xl'>Teams & Patrons</p>
    </div>
    <Swiper style={{
  "--swiper-pagination-color": "#FFBA08",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "10px",
  "--swiper-pagination-bullet-active-size": "120px",
  "--swiper-pagination-bullet-horizontal-gap": "10px",
  "--swiper-navigation-color": "#FFBA08",
  "--swiper-navigation-background":"#ffffff"
}}
    spaceBetween={50}
    modules={[Pagination,Navigation,Autoplay]}
    slidesPerView={3}
    centeredSlides={true}
    grabCursor={true}
    pagination={{clickable:true}}
    navigation
    loop={true}
    // autoplay={{delay:3000}}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    className=' px-10 pb-10 pt-10'
    breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 180,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
  >
 

    
    <SwiperSlide className='w-full h-[300px] hover:scale-105 transition-transform duration-300 '>
      <div className=' flex justify-center relative z-1 '>
          <div className=' w-full'>
              <img src={Image3} className=' w-full h-[300px] backdrop-blur-md '/>
              <div className=' bg-white mx-3 mb-2 absolute bottom-0 left-0 right-0 shadow-lg py-3'>
                 <p className='flex flex-col h-full text-[20px] text-center text-blue-800'>Prataprao Jadhav</p>
                 <p className='flex flex-col h-full text-[13px] text-center text-blue-800'>Minister of State for Health</p>
                 
              </div>
               
          </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className='w-full h-[300px] hover:scale-105 transition-transform duration-300 '>
      <div className=' flex justify-center relative z-1 '>
          <div className=' w-full'>
              <img src={Image5} className=' w-full h-[300px] backdrop-blur-md '/>
              <div className=' bg-white mx-3 mb-2 absolute bottom-0 left-0 right-0 shadow-lg py-3'>
                 <p className='flex flex-col h-full text-[20px] text-center text-blue-800'>Dr. Abhay Jere
                 </p>
                 <p className='flex flex-col h-full text-[13px] text-center text-blue-800'>Vice Chairman, AICTE</p>
                 
              </div>
               
          </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className='w-full h-[300px] hover:scale-105 transition-transform duration-300 '>
      <div className=' flex justify-center relative z-1 '>
          <div className=' w-full'>
              <img src={Image6} className=' w-full h-[300px] backdrop-blur-md '/>
              <div className=' bg-white mx-3 mb-2 absolute bottom-0 left-0 right-0 shadow-lg py-3'>
                 <p className='flex flex-col h-full text-[20px] text-center text-blue-800'>Shri Narendra Modi</p>
                 <p className='flex flex-col h-full text-[13px] text-center text-blue-800'>Hon'ble Prime Minister</p>
                 
              </div>
               
          </div>
      </div>
    </SwiperSlide>
    
    <SwiperSlide className='w-full h-[300px] hover:scale-105 transition-transform duration-300 '>
      <div className=' flex justify-center relative z-1 '>
          <div className=' w-full'>
              <img src={Image4} className=' w-full h-[300px] backdrop-blur-md '/>
              <div className=' bg-white mx-3 mb-2 absolute bottom-0 left-0 right-0 shadow-lg py-3'>
                 <p className='flex flex-col h-full text-[20px] text-center text-blue-800'>Shri Dharmendra Pradhan
                 </p>
                 <p className='flex flex-col h-full text-[13px] text-center text-blue-800'>Hon'ble Minister of Education</p>
                 
              </div>
               
          </div>
      </div>
    </SwiperSlide>
    

    

  {/* <div className='swiper-pagination mt-20'></div> */}
  </Swiper>
  </div>
  )
}

export default TeamsPatrons


