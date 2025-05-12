import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner_1 from '../../assets/home/01.jpg'
import banner_2 from '../../assets/home/02.jpg'
import banner_3 from '../../assets/home/03.png'
import banner_4 from '../../assets/home/04.jpg'
import banner_5 from '../../assets/home/05.png'
import banner_6 from '../../assets/home/06.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const HomePageBanner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img className='object-cover h-screen md:min-h-screen md:w-full' src={banner_1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-screen md:min-h-screen md:w-full' src={banner_2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-screen md:min-h-screen md:w-full' src={banner_3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-screen md:min-h-screen md:w-full' src={banner_4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-screen md:min-h-screen md:w-full' src={banner_5} alt="" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-screen md:min-h-screen md:w-full' src={banner_6} alt="" /></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default HomePageBanner;
