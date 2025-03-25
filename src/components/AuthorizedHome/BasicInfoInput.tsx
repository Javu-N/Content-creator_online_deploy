import { CircleX, ImageIcon } from "lucide-react";
import React, { ChangeEvent, FormEvent, Ref, useRef } from "react";

import Image from "next/image";

type FormData = {
  storyTitle: string;
  chapterName: string;
  chapterContent: string;
};

interface Props {
  handlePostSubmit: (e: FormEvent) => void;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleInputText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  setPreviewImage: (value: string | null) => void;
  formData: FormData;
  errorMessage: string;
  textAreaRef: Ref<HTMLTextAreaElement>;
  textVal: string;
  previewImage: string | null;
}

const BasicInfoInput = ({
  handlePostSubmit,
  handleFormChange,
  handleInputText,
  setPreviewImage,
  errorMessage,
  formData,
  textAreaRef,
  textVal,
  previewImage,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const deletePreviewImage = () => {
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
      setPreviewImage(null);
      fileInputRef.current!.value = "";
    }
  };

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
              className="h-[200px] w-auto rounded-md"
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
          Post
        </button>
      </div>
    </form>
  );
};

export default BasicInfoInput;
