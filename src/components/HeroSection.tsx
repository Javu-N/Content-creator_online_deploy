'use client';

import Image from "next/image"
import heroImage from '../../public/heroImage.png'
import "./hero-section.css";
import { useEffect, useRef, } from "react";


export const HeroSection = () => {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function createStars() {

            const scene = sceneRef.current;

            if (!scene) return;

            // Remove existing stars before creating new ones
            const existingStars = scene.querySelectorAll('.star'); // Use a class to select stars
            existingStars.forEach(star => star.remove());

            const { offsetWidth: width, offsetHeight: height } = scene; // Get the dimensions of the hero-section
            const count = width > 800 ? 200 : 100;

            for (let i = 0; i < count; i++) {
                const star = document.createElement("i");
                star.className = 'star';
                const x = Math.floor(Math.random() * width);
                const y = Math.floor(Math.random() * height) + 100;
                const duration = Math.random() * 10;
                const size = Math.random() * 2;

                star.style.left = `${x}px`;
                star.style.top = `${y}px`;
                star.style.width = `${1 + size}px`;
                star.style.height = `${1 + size}px`;

                star.style.animationDuration = `${5 + duration}s`;
                star.style.animationDelay = `${duration}s`;

                scene.appendChild(star);
            }
        }

        createStars();

        // Handle resize event to recreate stars
        const handleResize = () => {
            createStars();
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        // Hero Section
        <section className="bg-night-sky flex-col w-full" >
            <div className="h-[100px] w-full"></div>


            <div className="hero-section pb-20" ref={sceneRef}>
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 lg:w-2/3">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground font-bold mb-6">
                                Welcome to <br className="hidden md:block" />
                                <span className="bg-rainbow text-transparent bg-clip-text">StoriVerse</span>
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-foreground mb-8">
                                Create and immerse yourself in the world of amazing stories
                            </p>
                            <div className="flex gap-2">
                                <a href="#" className="bg-rainbow hover:bg-rainbow-hover text-foreground font-bold py-3 px-6 rounded-md">
                                    {`Let's read`}
                                </a>
                                <a href="#" className="bg-gray-700 hover:bg-gray-600 text-foreground font-bold py-3 px-6 rounded-md">
                                    Create Yours
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                            <Image src={heroImage} alt="Hero Image" className="bg-[var(--foreground)] rounded-full z-50" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

