import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import default_avatar from "$/public/default-avatar.jpeg";
import { generateApi, POST_COMMENT } from "@/constants/api";
import axios from "axios";
import Cookies from "js-cookie";
import { Comment } from "@/types/Comment";

interface CommentInputProps {
  chapterId: string;
  setAddedComment?: React.Dispatch<React.SetStateAction<Comment[]>>;
  setTotalComment?: React.Dispatch<React.SetStateAction<number>>;
}
const CommentInput = ({
  chapterId,
  setAddedComment,
  setTotalComment,
}: CommentInputProps) => {
  const [text, setText] = useState("");
  const [comment] = useDebounce(text, 1000);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const createComment = async () => {
    if (!comment) {
      return;
    }
    const token = Cookies.get("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    setText("");

    console.log("Submitted comment:", comment);

    try {
      const response = await axios.post(
        generateApi(POST_COMMENT, chapterId),
        {
          comment_content: comment,
        },
        { headers }
      );
      console.log("Comment created:", response.data);
      if (setAddedComment) {
        setAddedComment((prev) => [...prev, response.data.result]);
      }

      if (setTotalComment) {
        setTotalComment((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <div className="border-t border-background pt-5 px-4 flex w-full gap-2 items-start">
      {/* User Avatar */}
      <Avatar className="w-[35px] h-[35px]">
        <AvatarImage src={default_avatar.src} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* Comment Input */}
      <textarea
        className="w-full bg-secondary rounded-md px-3 py-1 text-sm resize-none"
        placeholder="Write a comment..."
        rows={2}
        value={text}
        onChange={handleCommentChange}
        onFocus={(e) => {
          e.target.rows = 2;
        }}
        onBlur={(e) => {
          e.target.rows = 2;
        }}
      ></textarea>

      {/* Reply Button */}
      <button
        className="bg-rainbow px-3 py-1 rounded-md active:scale-95 text-xs sm:text-sm"
        type="button"
        onClick={createComment}
      >
        Comment
      </button>
    </div>
  );
};

export default CommentInput;
