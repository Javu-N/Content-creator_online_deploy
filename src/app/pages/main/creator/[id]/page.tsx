"use client";
import React, { useState } from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import About from '@/components/Creator/About';
import Works from '@/components/Creator/Works';
import ReadLists from '@/components/Creator/ReadLists';



const actor = {
    "nickname": "Dr. Disrespect",
    "id": 123,
    "works": 20,
    "readingLists": 5,
    "followers": 100,
    "intro_sentence": "I write sci-fi and horror story"
}

const tabs = [
    { label: "About", content: "Welcome to the Home tab!" },
    { label: "Works", content: "This is the About tab content." },
    { label: "Read Lists", content: "Reach us at the Contact tab." },
];

export default function page() {

    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className='py-[80px] flex-col justify-center items-center'>
            <div className='flex flex-col items-center'>
                <Avatar className='w-[80px] h-[80px]'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <ul className='grid grid-cols-3 w-[300px] sm:w-[400px] mt-3 bg-card rounded-xl py-1'>
                    <li className='text-small sm:text-medium flex flex-col items-center justify-center hover:font-bold hover:cursor-pointer'>
                        <span>6</span>
                        <span>Works</span>
                    </li>

                    <li className='text-small sm:text-medium flex flex-col items-center justify-center hover:font-bold hover:cursor-pointer'>
                        <span>13</span>
                        <span>Read Lists</span>
                    </li>

                    <li className='text-small sm:text-medium flex flex-col items-center justify-center hover:font-bold hover:cursor-pointer'>
                        <span>10</span>
                        <span>Followers</span>
                    </li>
                </ul>
                <div className="w-[300px] sm:w-[500px] mt-3 py-2 px-3 bg-card rounded-xl">
                    <div className="flex border-b border-gray-700">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 p-2 text-center text-sm md:text-medium ${activeTab === index
                                    ? "border-b-2 border-white text-white"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {activeTab === 0 ? <About /> : ''}
            {activeTab === 1 ? <Works /> : ''}
            {activeTab === 2 ? <ReadLists /> : ''}


        </div >
    )
}
