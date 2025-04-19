"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GenreSelect from "@/components/NewStory/GenreSelect";

const MyStoryNew = () => {
  const [storyTitle, setStoryTitle] = useState("Your Story Title");
  return (
    <div className="flex flex-col items-center mb-[50px] pt-[100px] h-screen">
      <div className="h-10 rounded-md bg-rainbow px-3">
        <h1 className="text-4xl font-bold text-white">{storyTitle}</h1>
      </div>
      <div className="mt-7 flex flex-col gap-4 xl:gap-0 xl:flex-row w-[95vw] xl:w-[80vw] justify-center items-start">
        <div className="w-full xl:w-[40%] flex flex-col items-center justify-center">
          <Image
            src="/heroImage.png"
            alt="CoverImage"
            height={300}
            width={200}
            className="bg-secondary rounded-md h-[400px] w-[300px]"
          />
        </div>
        <div className="bg-card w-full xl:w-[80%] px-8 py-4 rounded-md flex flex-col items-start gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="storyTitle" className="text-lg font-bold">
              Story Title
            </label>
            <input
              type="text"
              id="storyTitle"
              value={storyTitle}
              onChange={(e) => setStoryTitle(e.target.value)}
              placeholder="Enter your story title"
              className="border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="storyContent" className="text-lg font-bold">
              Story Description
            </label>
            <textarea
              id="storyContent"
              rows={10}
              className="border border-gray-300 rounded p-2"
              placeholder="Write your story here..."
            ></textarea>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="storyContent" className="text-lg font-bold">
              Story Genre
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-secondary">Genre</div>
              <div className="bg-secondary">Genre</div>
              <div className="bg-secondary">Genre</div>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-foreground text-background rounded-md w-[150px] py-1 active:scale-95">
                    Select Genre
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-secondary md:min-w-[700px]">
                  <DialogHeader className="hidden">
                    <DialogTitle>Choose Genre</DialogTitle>
                    <DialogDescription>
                      Select the genre of your story from the list below.
                    </DialogDescription>
                  </DialogHeader>
                  <GenreSelect />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <button className="bg-blue-500 text-white p-2 rounded mt-4">
            Save Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyStoryNew;
