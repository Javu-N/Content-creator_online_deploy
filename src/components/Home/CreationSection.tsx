'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import sample_image from '$/public/BookCover/sample_cover.png';
import Image from 'next/image';
import './css/creation-section.css';

export const CreationSection = () => {
    return (
        <section>
            <div className="flex mt-[30px] items-center justify-center">
                <div className="bg-rainbow px-10 py-3 rounded-full">
                    <p className="text-xl md:text-2xl text-foreground font-bold">Top Books</p>
                </div>
            </div>

            {/* Book list */}
            <div className="book-container flex my-[20px]  w-[85%] m-auto items-center justify-center">
                <Swiper
                    modules={[Pagination]}
                    grabCursor={true}
                    initialSlide={0}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView="auto"
                    speed={800}
                    slideToClickedSlide={true}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}

                >
                    <SwiperSlide>
                        <div className='flex justify-center gap-[20px] bg-bookCard p-[20px] rounded-xl text-foreground'>
                            <Image src={sample_image} alt="Book Cover" height={200} />
                            <div className="content flex-col m-auto">
                                <h1 className='font-bold text-xl md:text-2xl'>THIS IS A BOOK</h1>
                                <div className='flex gap-[5px] max-w-[300px] flex-wrap'>
                                    <span className='text-[15px]'>Thriller</span>
                                    <span className='text-[15px]'>Mystery</span>
                                    <span className='text-[15px]'>Romance</span>
                                    <span className='text-[15px]'>Horror</span>
                                    <span className='text-[15px]'>Adult</span>
                                    <span className='text-[15px]'>Religion</span>
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>

                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </section>
    )
}