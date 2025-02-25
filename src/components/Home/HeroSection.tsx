"use client";

import Image from "next/image";
import heroImage from "$/public/heroImage.png";
import "./css/hero-section.css";
// import { useEffect, useRef } from "react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const text = "StoriVerse";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust speed (100ms per character)

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    // Hero Section
    <section className="bg-background flex-col w-full justify-center items-center">
      <div className="h-[100px] w-full"></div>

      <div className="hero-section pb-5 md:pb-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground font-bold mb-6">
                Welcome to <br className="hidden md:block" />
                <span className="bg-rainbow text-transparent bg-clip-text">
                  {displayedText}
                </span>
              </h1>
              <p className="md:text-xl lg:text-2xl mb-8 text-justify max-w-[800px] pr-5">
                Create, share, and explore a universe of captivating stories.
                Whether you're a writer crafting your next masterpiece or a
                reader seeking unforgettable adventures, our platform brings
                stories to life. Join a community of storytellers and dive into
                limitless imagination—one page at a time.
              </p>
              <div className="flex gap-3">
                <Button className="bg-rainbow hover:scale-110 duration-300 font-bold py-3 px-6 text-rainbowForeground rounded-md">
                  <Link href="/">{`Let's read`}</Link>
                </Button>
                <Button className="flex items-center justify-center gap-2 hover:scale-110 duration-300 font-bold py-3 px-6 rounded-md">
                  <Link href="/">Create Yours</Link>
                  <PenIcon />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
              <div className=" bg-rainbow rounded-full p-3">
                <Image
                  src={heroImage}
                  alt="Hero Image"
                  className="bg-card p-5 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[80%] mx-auto border-t-4" />
    </section>
  );
};
