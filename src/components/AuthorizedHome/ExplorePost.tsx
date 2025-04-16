"use client";
import React, { useEffect } from "react";
import StoryPost from "./StoryPost";
import axios from "axios";
import { generateApi, GET_LATEST_CHAPTER_PAGED } from "@/constants/api";
import Cookies from "js-cookie";
import { Logger } from "@/utils/Logger";
import { useInfiniteQuery } from "@tanstack/react-query";
import StoryPostSkeleton from "./StoryPostSkeleton";
import { delay } from "@/utils/Delay";
import { useInView } from "react-intersection-observer";
import { Post } from "@/types/Post";

// each chapter is considered as a post
const ExplorePost = () => {
  const { ref, inView } = useInView();

  const fetchPosts = async ({ pageParam }: { pageParam: number }) => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(
        generateApi(GET_LATEST_CHAPTER_PAGED, "", `page=${pageParam}&size=10`),
        {
          headers,
        }
      );

      // delay for testing
      await delay();

      return response.data.result;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        Logger.error("Error fetching posts:", "client");
        throw new Error(`Error fetching posts: ${error.message}`);
      } else {
        Logger.error("Unexpected error:", "client");
        throw new Error("Unexpected error occurred");
      }
    }
  };

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["chapterPosts"],
      queryFn: fetchPosts,
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage.length ? allPages.length : undefined;
        return nextPage;
      },
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const content = data?.pages.map((page) =>
    page.map((post: Post, index: number) => {
      return (
        <StoryPost
          key={post.chapterId}
          innerRef={page.length == index + 1 ? ref : null}
          post={post}
        />
      );
    })
  );

  return (
    <div className="flex flex-col items-center w-full gap-4">
      {content}
      {(isLoading || isFetchingNextPage) && <StoryPostSkeleton />}
    </div>
  );
};

export default ExplorePost;
