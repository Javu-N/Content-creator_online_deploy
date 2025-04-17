import React from "react";
import PostInput from "@/components/AuthorizedHome/PostInput";
import ExplorePost from "./ExplorePost";

const AuthorizedHome = () => {
  return (
    <div className="pt-[80px] pb-[50px] w-full md:max-w-[80%] lg:max-w-[700px] flex flex-col items-center m-auto gap-4">
      <PostInput />
      <ExplorePost />
    </div>
  );
};

export default AuthorizedHome;
