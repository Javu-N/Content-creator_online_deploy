"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import sample_cover from "$/public/BookCover/sample_cover.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RocketIcon from "$/public/rocketIcon.png";
import "./css/feature-section.css";
const MockBook = [
  {
    title: "The Secrets of the Cosmos",
    description:
      "The universe is a vast and mysterious place, filled with wonders beyond human comprehension. Scientists have spent centuries trying to unravel its secrets, yet many questions remain unanswered. From the birth of stars to the formation of galaxies, every cosmic event holds a story waiting to be told. Black holes, with their immense gravitational pull, continue to intrigue researchers and challenge our understanding of physics. Dark matter and dark energy, which make up most of the universe, remain some of the biggest unsolved mysteries in science. Space exploration has allowed us to glimpse distant worlds, yet we have only scratched the surface of what lies beyond. As technology advances, we may one day unlock the true nature of the cosmos and our place within it.",
    author: "Constantine",
  },
  {
    title: "Mysteries of the Ocean Depths",
    description:
      "The ocean, covering over 70% of our planet's surface, remains one of the most unexplored and mysterious places on Earth. Vast, dark, and teeming with life, the depths hide creatures and ecosystems that continue to fascinate scientists. From the bioluminescent creatures in the abyss to the unexplored hydrothermal vents, the ocean's mysteries are far from being fully understood. We know more about the surface of the moon than we do about the ocean floor, but advancements in underwater exploration may one day unlock the secrets of the deep. The pressure, darkness, and extreme cold make it a harsh environment for human exploration, but that hasn’t stopped the pursuit of knowledge.",
    author: "Constantine",
  },
  {
    title: "Time Travel: A Journey Beyond Reality",
    description:
      "Time travel has been a fascinating subject in science fiction for centuries, but could it actually be possible? This book delves into the theories of time travel, exploring ideas like wormholes, parallel universes, and the implications of traveling through time. From H.G. Wells' famous 'The Time Machine' to modern theories of quantum mechanics, time travel has evolved from a fantastical notion to a topic of serious scientific discussion. What would it mean to travel to the past or the future? Could we alter history or peek into potential futures? The book also examines the paradoxes that come with time travel, such as the grandfather paradox and the possibility of infinite timelines.",
    author: "Constantine",
  },
  {
    title: "Artificial Intelligence: The Future of Humanity",
    description:
      "Artificial Intelligence (AI) is no longer a futuristic concept, but a reality that is already shaping the world around us. From machine learning algorithms to self-driving cars, AI has begun to permeate every aspect of our lives. But what does the future hold? This book explores the rise of AI, its potential applications, and the ethical questions that arise as machines become more intelligent. Will AI ever surpass human intelligence, and what would that mean for society? Can AI develop emotions, or is it destined to be a tool for us to control? As we stand on the brink of an AI-driven future, these questions become more pressing than ever.",
    author: "Constantine",
  },
  {
    title: "The Wonders of Ancient Civilizations",
    description:
      "Ancient civilizations have left behind a rich legacy that continues to shape the world today. From the pyramids of Egypt to the ruins of Rome, these societies achieved remarkable feats in engineering, art, and governance. But how did they do it? This book explores the mysteries behind some of the world's greatest ancient wonders, examining the cultures, technologies, and philosophies that made them possible. What knowledge did the ancient Egyptians possess to build the pyramids with such precision? How did the Romans manage to construct vast empires with efficient road networks? Discover the ingenuity and creativity that defined these early civilizations.",
    author: "Constantine",
  },
];

export const FeatureSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="my-4">
        <span className="bg-rainbow text-transparent bg-clip-text  text-[1.5rem] lg:text-[3rem] font-bold">
          Features
        </span>
      </div>

      <div>
        <Carousel
          className="w-full max-w-3xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl "
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {MockBook.map((book) => (
              <CarouselItem
                key={book.title}
                className="flex justify-center items-center "
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] w-full bg-purple-200 rounded-tl-[100px] rounded-br-[100px] ">
                  <div className="flex items-center justify-center  text-black py-2 pl-2">
                    <Image
                      src={sample_cover}
                      alt="sample-cover"
                      className="rounded-tl-[100px]"
                    />
                  </div>
                  <div className="my-auto space-y-4  text-black  py-4 px-4 md:pr-8 gap-5 ">
                    <h1 className="font-bold text-[1.5rem] lg:text-[3rem] text-blue-700">
                      {book.title}
                    </h1>
                    <h2 className="font-sans text-[1rem] lg:text-[1.5rem]">
                      {book.author}
                    </h2>
                    <p className="text-justify font-mono">{book.description}</p>
                    <Button className="text-[1.25rem]  hover:scale-105 flex gap-1 items-center neon-border">
                      Read Now
                      <Image
                        src={RocketIcon}
                        alt="rocket_icon"
                        className="w-5 h-5"
                      />
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <hr className="w-[80%] mx-auto h-1 mt-3 mb-10 bg-rainbow rounded-full" />
    </section>
  );
};
