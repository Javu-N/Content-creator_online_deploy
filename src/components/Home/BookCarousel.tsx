'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image from './images/developer.jpg'
import './style.css';

// modules
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react';
const BookCarousel = () => {

    return (
        <div className='my-[20px] flex justify-center align-center text-white swiper'>
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },

                    768: {
                        slidesPerView: 2
                    },

                    1300: {
                        slidesPerView: 3
                    },

                    1920: {
                        slidesPerView: 4
                    }
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className='w-[80%]'
                loop={true}
                modules={[Pagination, Navigation]}

            >
                <div className='swiper-wrapper'>
                    <SwiperSlide>
                        <Image src={image} width={300} height={200} alt="just an image" layout='responsive' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image} width={300} height={200} alt="just an image" layout='responsive' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image} width={300} height={200} alt="just an image" layout='responsive' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image} width={300} height={200} alt="just an image" layout='responsive' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image} width={300} height={200} alt="just an image" layout='responsive' />
                    </SwiperSlide>
                </div>
            </Swiper>

            <div className="swiper-button-next md:mr-20">
            </div>
            <div className="swiper-button-prev">
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default BookCarousel;
