"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "./css/creation-section.css";
import { get_books } from "@/api/api";

type BookSlideProps = {
  book: {
    id: number;
    title: string;
    Author: string;
    genre: Array<string>;
    description: string;
    cover: string;
    view_rate: number;
    star_rate: number;
    number_of_chapters: number;
  };
};

export const BookSlide = ({ book }: BookSlideProps) => {
  return (
    <div className="flex justify-center gap-[20px] bg-card p-[20px] rounded-xl text-foreground">
      <div className="flex justify-center items-center my-auto w-[200px] rounded-xl">
        <img
          src={book.cover}
          alt="Book Cover"
          className="rounded-xl h-[200px] w-[150px]"
        />
      </div>

      <div className="block m-auto space-y-2 w-1/2 md:w-3/4">
        <h1 className="font-bold text-xl md:text-2xl">{book.title}</h1>
        <div className="md:flex gap-[5px] flex-wrap hidden">
          <span className="text-[15px] bg-foreground px-2 text-background rounded-[14px]">
            Thriller
          </span>
          <span className="text-[15px] bg-foreground px-2 text-background rounded-[14px]">
            Mystery
          </span>
          <span className="text-[15px] bg-foreground px-2 text-background rounded-[14px]">
            Romance
          </span>
          <span className="text-[15px] bg-foreground px-2 text-background rounded-[14px]">
            Horror
          </span>
          <span className="text-[15px] bg-foreground px-2 text-background rounded-[14px]">
            Adult
          </span>
          <span className="text-[15px] bg-foreground px-2 text-background rounded-[14px]">
            Religion
          </span>
        </div>
        <h2 className="font-semibold">{book.Author}</h2>
        <p>{book.description}</p>

        <a className="bg-rainbow hover:scale-110 duration-300 text-foreground font-bold py-3 px-6 rounded-md inline-block cursor-pointer">
          {`Let's read`}
        </a>
      </div>
    </div>
  );
};

export const TopBookSection = () => {
  const books = get_books();
  return (
    <>
      <style>
        {`
                    .swiper-pagination-bullet {
                        width: 16px;
                        height: 16px;
                        background-color: #fff;
                        border-radius: 50%;
                    }

                    .swiper-pagination-bullet-active {
                        background: var(--rainbow);
                        width: 32px;
                        border-radius: 14px;
                        box-shadow: var(--rainbow-shadow);
                        transition: all 0.8s ease-in-out;
                    }
                    `}
      </style>
      <section className="block">
        <div className="flex mt-[30px] items-center justify-center">
          <div className="bg-rainbow px-10 py-3 rounded-full">
            <p className="text-xl md:text-2xl text-foreground font-bold">
              Top Books
            </p>
          </div>
        </div>

        {/* Book list */}
        <div className="w-[90%] mt-[20px] m-auto overflow-hidden flex justify-center rounded-xl">
          <Swiper
            modules={[Pagination, EffectCoverflow]}
            loop={true}
            speed={1000}
            grabCursor={true}
            initialSlide={0}
            centeredSlides={true}
            slideToClickedSlide={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              900: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {books.slice(0, 7).map((book, index) => (
              <SwiperSlide key={index}>
                <BookSlide book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[40px] relative">
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
};
