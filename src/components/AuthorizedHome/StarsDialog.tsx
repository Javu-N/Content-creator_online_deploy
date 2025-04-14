import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "@/i18n/routing";
import default_avatar from "$/public/default-avatar.jpeg";

const Profile = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <Avatar className="w-[35px] h-[35px]">
          <AvatarImage src={default_avatar.src} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center">
          <h1 className="text-sm font-semibold">
            <Link href="#" className="hover:underline">
              Khang Nguyen
            </Link>
          </h1>
          <span className="text-xs text-muted-foreground">200 followers</span>
        </div>
      </div>

      <div>
        <button className="bg-background px-3 py-1 rounded-md active:scale-95 text-xs sm:text-sm">
          View Profile
        </button>
      </div>
    </div>
  );
};

const StarsDialog = () => {
  return (
    <DialogContent className="sm:max-w-[500px] bg-card px-0 pt-3 rounded-md gap-0">
      <DialogHeader className="border-b border-background px-4 pb-2">
        <DialogTitle className="text-center text-md font-bold">
          Stars
        </DialogTitle>
        <DialogDescription className="text-center text-xs text-muted-foreground">
          People who starred this content
        </DialogDescription>
      </DialogHeader>

      <div className="px-4 pt-4 flex flex-col items-center gap-3 max-h-[50vh] overflow-y-auto scroll-container">
        {Array.from({ length: 50 }, (_, index) => (
          <Profile key={index} />
        ))}
      </div>
    </DialogContent>
  );
};

export default StarsDialog;
