import React from "react";
import PostInput from "@/components/AuthorizedHome/PostInput";

const AuthorizedHome = () => {
  return (
    <div className="pt-[80px] w-full md:max-w-[80%] lg:max-w-[700px] flex flex-col items-center m-auto">
      <PostInput />
    </div>
  );
};

export default AuthorizedHome;
