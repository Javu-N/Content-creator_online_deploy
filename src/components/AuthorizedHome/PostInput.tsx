"use client";

import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

import { z } from "zod";
import GenreMultiSelect from "./GenreMultiSelect";
import default_avatar from "$/public/default-avatar.jpeg";
import BasicInfoInput from "./BasicInfoInput";

const schema = z.object({
  storyTitle: z.string(),
  chapterName: z.string(),
  chapterContent: z.string().min(1, "You have not typed anything"),
});

const PostInput = () => {
  const [textVal, setTextVal] = useState("");
  const [formData, setFormData] = useState({
    storyTitle: "",
    chapterName: "",
    chapterContent: "",
  });

  const [basicStep, setBasicStep] = useState<boolean>(true);
  const [genreStep, setGenreStep] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setTextVal(event.target.value);
  };

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      const threshold = window.innerHeight * 0.4;
      textAreaRef.current.style.height = "auto";

      if (textAreaRef.current?.scrollHeight < threshold) {
        textAreaRef.current.style.height =
          textAreaRef.current?.scrollHeight + "px";
      } else {
        textAreaRef.current.style.height = threshold + "px";
      }
    }
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePostSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validateResult = schema.safeParse(formData);

    if (!validateResult.success) {
      const error = validateResult.error.flatten().fieldErrors;
      setErrorMessage(error.chapterContent?.[0] || "");
      return;
    }

    setBasicStep(false);
    setGenreStep(true);
  };

  useEffect(() => {
    resizeTextArea();
  }, [textVal]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="w-full bg-card flex justify-between px-5 py-2 rounded-xl items-center hover: cursor-text"
          onClick={() => setErrorMessage("")}
        >
          <div className="flex space-x-3 items-center">
            <Avatar className="w-[35px] h-[35px]">
              <AvatarImage src={default_avatar.src} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-[#B8BBBF]  text-sm">
              Tell your story... Khang
            </span>
          </div>
          <button className="bg-background px-3 py-1 rounded-md active:scale-95">
            Post
          </button>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-card px-0 pt-3 rounded-md">
        <DialogTitle className="hidden">Post a story</DialogTitle>
        <DialogDescription className="hidden">Post a story</DialogDescription>
        <div className="pb-3 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.1px] after:bg-[#303233]">
          <h1 className="text-center text-lg font-bold">Post a Story</h1>
        </div>
        {genreStep && (
          <GenreMultiSelect
            setBasicStep={setBasicStep}
            setGenreStep={setGenreStep}
          />
        )}

        {basicStep && (
          <BasicInfoInput
            handlePostSubmit={handlePostSubmit}
            handleFormChange={handleFormChange}
            handleInputText={handleInputText}
            setPreviewImage={setPreviewImage}
            errorMessage={errorMessage}
            formData={formData}
            textAreaRef={textAreaRef}
            textVal={textVal}
            previewImage={previewImage}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PostInput;
