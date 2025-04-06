"use client";

import React, { useEffect, useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

import GenreMultiSelect from "./GenreMultiSelect";
import default_avatar from "$/public/default-avatar.jpeg";
import BasicInfoInput from "./BasicInfoInput";
import {
  CREATE_NEW_CHAPTER_STORY,
  CREATE_STORY,
  generateApi,
  GET_ALL_GENRES,
  UPDATE_STORY_GENRE,
} from "@/constants/api";
import axios from "axios";
import Cookies from "js-cookie";

import { useToast } from "@/hooks/use-toast";

type Genre = {
  genreId: number;
  genreName: string;
};

const PostInput = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    storyTitle: "",
    chapterName: "",
    chapterContent: "",
  });
  const closeRef = useRef<HTMLButtonElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [textVal, setTextVal] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

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

  const handlePostStory = async () => {
    const createStoryRequest = {
      storyTitle: formData.storyTitle,
    };

    const token = Cookies.get("token");

    const createStoryResult = await axios
      .post(generateApi(CREATE_STORY), createStoryRequest, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        console.log("Error", error);
      });

    if (!createStoryResult) {
      return;
    }

    const storyId = createStoryResult.data.result.storyId;

    const updateStoryGenreRequest = {
      genreList: selectedGenres,
    };

    await axios
      .put(
        generateApi(UPDATE_STORY_GENRE, storyId.toString()),
        updateStoryGenreRequest,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((error) => {
        console.log("Error", error);
      });

    const createNewChapterRequest = {
      chapterTitle: formData.chapterName,
      chapterContent: formData.chapterContent,
    };

    await axios
      .post(
        generateApi(CREATE_NEW_CHAPTER_STORY, storyId.toString()),
        createNewChapterRequest,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((error) => {
        console.log("Error", error);
      });

    toast({
      duration: 2000,
      title: "Post new story successfully",
    });

    setBasicStep(true);
    setGenreStep(false);
    setSelectedGenres([]);
    setFormData({
      storyTitle: "",
      chapterName: "",
      chapterContent: "",
    });
    setTextVal("");
    setPreviewImage(null);
    setErrorMessage("");
    setGenreList(null);
    setLoading(true);
    setLoadGenreError(null);
    setTimeout(() => {
      getAllGenre();
    }, 2000);

    closeRef.current?.click();
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
            <span className="text-muted-foreground text-xs sm:text-sm">
              Tell your story... Khang
            </span>
          </div>
          <button className="bg-background px-3 py-1 rounded-md active:scale-95 text-xs sm:text-sm">
            Quick Post
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
            setSelectedGenres={setSelectedGenres}
            handlePostStory={handlePostStory}
            selectedGenres={selectedGenres}
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

        <DialogClose asChild>
          <button ref={closeRef} className="hidden" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default PostInput;
