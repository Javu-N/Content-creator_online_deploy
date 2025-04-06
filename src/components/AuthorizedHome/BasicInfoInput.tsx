import { CircleX, ImageIcon } from "lucide-react";
import React, { ChangeEvent, FormEvent, useEffect, useRef } from "react";

import Image from "next/image";
import { z } from "zod";

type FormData = {
  storyTitle: string;
  chapterName: string;
  chapterContent: string;
};

interface Props {
  setPreviewImage: (value: string | null) => void;
  setErrorMessage: (value: string) => void;
  setFormData: (value: FormData) => void;
  setBasicStep: (value: boolean) => void;
  setGenreStep: (value: boolean) => void;
  setTextVal: (value: string) => void;
  textVal: string;
  formData: FormData;
  errorMessage: string;
  previewImage: string | null;
}

const schema = z.object({
  storyTitle: z.string().min(1, "Story title is required"),
  chapterName: z.string().min(1, "Chapter name is required"),
  chapterContent: z.string().min(1, "You have not typed anything"),
});

const BasicInfoInput = ({
  setPreviewImage,
  setErrorMessage,
  setFormData,
  setBasicStep,
  setGenreStep,
  setTextVal,
  formData,
  errorMessage,
  previewImage,
  textVal,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setTextVal(event.target.value);
  };

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      const threshold = window.innerHeight * 0.3;
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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }

      const objectURL = URL.createObjectURL(file);
      setPreviewImage(objectURL);
    }
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

  const deletePreviewImage = () => {
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
      setPreviewImage(null);
      fileInputRef.current!.value = "";
    }
  };

  useEffect(() => {
    resizeTextArea();
  }, [textVal]);

  return (
    <form className="px-4 text-sm space-y-3" onSubmit={handlePostSubmit}>
      {errorMessage && (
        <div className="text-center text-red-600 text-sm m-auto">
          {errorMessage}
        </div>
      )}
      <div className="flex flex-col gap-2 md:flex-row items-center">
        <input
          name="storyTitle"
          className="focus:outline-none appearance-none w-full px-3 py-1 rounded-md bg-background"
          type="text"
          placeholder="Story title"
          onChange={handleFormChange}
          value={formData.storyTitle}
        />

        <input
          name="chapterName"
          className="focus:outline-none appearance-none w-full px-3 py-1 rounded-md bg-background"
          type="text"
          placeholder="Chapter name"
          onChange={handleFormChange}
          value={formData.chapterName}
        />
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      <button
        className="flex gap-1 items-center px-3 py-1 bg-background font-thin rounded-md active:scale-95"
        type="button"
        onClick={() => {
          fileInputRef?.current?.click();
        }}
      >
        <ImageIcon />
        <span>Upload Picture</span>
      </button>

      {previewImage && (
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src={previewImage}
              alt="Uploaded preview"
              height={400}
              width={250}
              className="h-[20vh] w-auto rounded-md"
            />
            <button
              className="absolute -top-3 -right-4"
              type="button"
              onClick={deletePreviewImage}
            >
              <CircleX className="text-red-500" />
            </button>
          </div>
        </div>
      )}

      <div>
        <textarea
          name="chapterContent"
          ref={textAreaRef}
          className="focus:outline-none appearance-none w-full bg-card"
          placeholder="Write your story..."
          value={textVal}
          onChange={(event) => {
            handleInputText(event);
            handleFormChange(event);
          }}
          rows={4}
        ></textarea>
      </div>

      <div className="flex gap-2 items-center font-semibold">
        <button
          className="w-full px-3 py-2 bg-foreground text-background rounded-md active:scale-95"
          type="button"
        >
          Draft
        </button>
        <button
          className="w-full px-3 py-2 bg-rainbow rounded-md active:scale-95"
          type="submit"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default BasicInfoInput;
