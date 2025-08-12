// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { Pagination } from 'react-bootstrap';
import { A11y, Navigation, Scrollbar, Pagination, Autoplay} from 'swiper/modules';
import { sliderArray } from '../../Data/LocalData';
const AwardsSlider = () => {
  return (
      <>
    <Swiper
        //         autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            // slidesPerView={3}
            // navigation
            pagination={{ clickable: false }}
            // scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            //   onSlideChange={() =>{ }
        //        breakpoints={{
        //   769: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 3,
        //   },
        // }}
            >
      

                 {sliderArray.map((element)=> {
                     return (
                            <SwiperSlide>
                                
                            </SwiperSlide>
                          )
                          }
                          )}
            </Swiper>
      </>
  )
}

export default AwardsSlider