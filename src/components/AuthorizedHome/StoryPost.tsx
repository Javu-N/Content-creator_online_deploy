"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import default_avatar from "$/public/default-avatar.jpeg";
import { Link } from "@/i18n/routing";
import { CircleEllipsis, Link2, MessageCircle, StarIcon } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import StarsDialog from "./StarsDialog";
import StoryPostDialog from "./StoryPostDialog";

const WORDS_LIMIT = Number(process.env.WORDS_LIMIT) || 100;

const content =
  "Emma hated mirrors. Ever since she was a child, she felt like they watched her. But in her new apartment, there was one she couldn’t avoid—a large antique mirror nailed into the bathroom wall. It came with the place.\n\nOne night, after brushing her teeth, she looked up and saw her reflection smile. She wasn’t smiling.\n\nFrozen, Emma blinked. The reflection mimicked her again—this time correctly. Shaking her head, she laughed nervously and chalked it up to being tired.\n\nBut the next night, it waved.\n\nEmma ran.\n\nShe covered the mirror with a towel, but the fabric was soaked and on the floor the next morning. Her reflection stood still, smiling, as she backed away in real life.\n\nDesperate, she smashed it.\n\nThe glass shattered—yet the reflection remained, smiling from the frame.\n\nEmma screamed. Her body felt heavy. She looked down, but she wasn’t there. She turned to the mirror.\n\nShe was inside it.\n\nFrom her old world, her doppelgänger stepped out, brushing shards off its shoulders.\n\nNow, Emma watches helplessly from the other side as the thing wears her skin, lives her life, and smiles… every time it passes a mirror.";

const StoryPost = () => {
  const wordCount = content.trim().length;
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = wordCount > WORDS_LIMIT;

  let displayedText = content;

  if (!expanded && shouldTruncate) {
    const words = content.match(/\S+\s*/g) || [];
    displayedText = words.slice(0, 100).join("") + "... ";
  }

  const [starred, setStarred] = useState(false);

  return (
    <div className="bg-card w-full px-5 py-2 rounded-md block space-y-3">
      <div className="flex items-center justify-between">
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
            <span className="text-xs text-muted-foreground">02 April 2025</span>
          </div>
        </div>

        <div>
          <CircleEllipsis
            className="text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-200 ease-in-out"
            size={22}
          />
        </div>
      </div>

      <div className="w-full block">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Story title</h2>
          <div className="text-sm font-serif">
            <span className="text-xl">1: </span>
            <h3 className="inline">Chapter name</h3>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm text-justify whitespace-pre-wrap inline">
            <p className="inline">{displayedText}</p>
            {!expanded && (
              <button
                className="font-bold hover:underline inline"
                type="button"
                onClick={() => setExpanded(!expanded)}
              >
                See more
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="flex items-center gap-2 bg-secondary rounded-md px-2 py-1 active:scale-95"
                type="button"
              >
                <span className="text-muted-foreground">21</span>
                <StarIcon fill="#facc15" stroke="#facc15" size={16} />
              </button>
            </DialogTrigger>

            <StarsDialog />
          </Dialog>

          <div className="text-muted-foreground">0 comments</div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 border-t border-t-muted-foreground py-1 text-muted-foreground">
          <button
            className="flex justify-center items-center py-1 hover:bg-secondary w-full rounded-md hover:cursor-pointer gap-1"
            type="button"
            onClick={() => setStarred(!starred)}
          >
            {starred ? (
              <>
                <StarIcon fill="#facc15" stroke="#facc15" size={15} />
                <span className="text-[#facc15]">Star</span>
              </>
            ) : (
              <>
                <StarIcon size={15} />
                <span>Star</span>
              </>
            )}
          </button>
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex justify-center items-center py-1 hover:bg-secondary w-full rounded-md hover:cursor-pointer gap-1">
                <MessageCircle size={15} />
                <span>Comment</span>
              </div>
            </DialogTrigger>
            <StoryPostDialog />
          </Dialog>
          <div className="flex justify-center items-center py-1 hover:bg-secondary w-full rounded-md hover:cursor-pointer gap-1">
            <Link2 size={15} />
            <span>Copy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPost;
