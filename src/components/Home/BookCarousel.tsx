'use client';

import React, { useState } from 'react';

const BookCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const books = [
        "Book 1", "Book 2", "Book 3", "Book 4",
        "Book 5", "Book 6", "Book 7", "Book 8",
        "Book 9", "Book 10", "Book 11", "Book 12",
        // Add more book titles as needed
    ];

    const booksPerSlide = 4;
    const totalSlides = Math.ceil(books.length / booksPerSlide);

    const moveSlide = (direction: number) => {
        console.log("CHANGE SLIDE");
        setCurrentSlide((prevSlide) => (prevSlide + direction + totalSlides) % totalSlides);
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden flex">
            {/* Carousel Buttons */}
            <button
                className="bg-red-600 h-[50px] w-[50px] hover:bg-red-400 z-1"
                onClick={() => moveSlide(-1)}
            >
            </button>
            {/* <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
                onClick={() => moveSlide(1)}
            >
            </button> */}

            {/* Carousel Track */}
            <div
                className="flex transition-transform duration-500 z-3"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {books.map((book, index) => (
                    <div key={index} className="w-1/4 p-2 flex-shrink-0">
                        <div className="bg-gray-100 p-4 rounded-lg shadow text-center">{book}</div>
                    </div>
                ))}
            </div>

            <button
                className="bg-red-600 h-[50px] w-[50px] hover:bg-red-400 z-1"
                onClick={() => moveSlide(1)}
            >
            </button>
        </div>
    );
};

export default BookCarousel;
