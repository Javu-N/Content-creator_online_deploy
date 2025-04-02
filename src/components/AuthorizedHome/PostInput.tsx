"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

import GenreMultiSelect from "./GenreMultiSelect";
import default_avatar from "$/public/default-avatar.jpeg";
import BasicInfoInput from "./BasicInfoInput";
import { generateApi, GET_ALL_GENRES } from "@/constants/api";
import axios from "axios";
import Cookies from "js-cookie";

type Genre = {
  genreId: number;
  genreName: string;
};

const PostInput = () => {
  const [formData, setFormData] = useState({
    storyTitle: "",
    chapterName: "",
    chapterContent: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [textVal, setTextVal] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [basicStep, setBasicStep] = useState<boolean>(true);
  const [genreStep, setGenreStep] = useState<boolean>(false);

  const [genreList, setGenreList] = useState<Genre[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadGenreError, setLoadGenreError] = useState(null);

  const getAllGenre = async () => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    await axios
      .get(generateApi(GET_ALL_GENRES), { headers })
      .then((response) => {
        setGenreList(response.data.result);
        setLoading(false);
      })
      .catch((error) => {
        setLoadGenreError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllGenre();
  }, []);

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
            genreList={genreList}
            loading={loading}
            loadGenreError={loadGenreError}
          />
        )}

        {basicStep && (
          <BasicInfoInput
            setPreviewImage={setPreviewImage}
            setErrorMessage={setErrorMessage}
            setFormData={setFormData}
            setBasicStep={setBasicStep}
            setGenreStep={setGenreStep}
            setTextVal={setTextVal}
            formData={formData}
            errorMessage={errorMessage}
            previewImage={previewImage}
            textVal={textVal}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PostInput;
