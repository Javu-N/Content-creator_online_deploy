"use client";
import React, { useRef, useState } from "react";
import sample_image from "$/public/BookCover/sample_cover.jpeg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Image as UploadIcon } from "lucide-react";
import { Link } from "@/i18n/routing";

const Page = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [, setImageSrc] = useState("/placeholder.png");
  const [genres, setGenres] = useState([1]);

  const addGenre = () => {
    setGenres([...genres, genres.length + 1]); // Add a new genre item
  };
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Safely access the ref
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  return (
    <div className="py-[80px] flex flex-col items-center md:flex-row md:justify-center md:items-start  gap-5">
      <div className="w-[250px] h-[400px] bg-blue relative bg-card rounded-xl flex justify-center items-center">
        <Input
          type="file"
          id="picture"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <UploadIcon
          className="w-1/5 h-1/5 text-gray-500 hover:cursor-pointer"
          onClick={handleImageClick}
        />
        <Image src={sample_image} alt="image" fill className="hidden" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 bg-card p-5 sm:min-w-[400px] md:min-w-[500px] rounded-xl">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-large">Title</span>
            <Input type="text" placeholder="Untitled Story" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-large">Description</span>
            <Textarea
              placeholder="Your Story Description"
              className="min-h-[300px] md:min-h-[200px]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold text-large">Genre</span>
            <div className="flex flex-col gap-3">
              {genres.map((_, index) => (
                <div key={index} className="flex gap-2 w-full">
                  <Input type="text" placeholder="Genre" />
                  <Button onClick={addGenre}>
                    <Plus />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-center md:justify-start">
          <Button className="w-[80px]">Skip</Button>
          <Button className="w-[80px] bg-red-500 hover:scale-105 hover:bg-red-500 text-foreground">
            Cancel
          </Button>
          <Button className="w-[80px] bg-rainbow text-foreground hover:scale-105">
            <Link href="/pages/main/write/123">Continue</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
