import React from 'react'
import BookCarousel from './BookCarousel'

export const CreationSection = () => {
    return (
        <section className='flex-col'>
            <div className="flex mt-[30px] items-center justify-center">
                <div className="bg-rainbow px-10 py-3 rounded-full">
                    <p className="text-xl md:text-4xl text-foreground font-bold">Top Books</p>
                </div>
            </div>

            {/* Book list */}
            <BookCarousel />
        </section>
    )
}