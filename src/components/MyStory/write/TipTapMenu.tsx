import { Editor } from '@tiptap/react';
import {
  BoldIcon,
  HighlighterIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from 'lucide-react';
import React from 'react';

interface TipTapMenuProps {
  editor: Editor | null;
}

const TipTapMenu = ({ editor }: TipTapMenuProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-2 min-w-[200px] border-[0.5px] border-foreground bg-card justify-center items-center px-2 py-1 rounded-md">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${
          editor.isActive('bold') ? 'bg-secondary' : ''
        } rounded-md p-1 hover:bg-secondary`}
      >
        <BoldIcon className="w-5 h-5" strokeWidth={3} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${
          editor.isActive('italic') ? 'bg-secondary' : ''
        } rounded-md p-1 hover:bg-secondary`}
      >
        <ItalicIcon className="w-5 h-5" strokeWidth={1} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`${
          editor.isActive('underline') ? 'bg-secondary' : ''
        } rounded-md p-1 hover:bg-secondary`}
      >
        <UnderlineIcon className="w-5 h-5" strokeWidth={1} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`${
          editor.isActive('strike') ? 'bg-secondary' : ''
        } rounded-md p-1 hover:bg-secondary`}
      >
        <StrikethroughIcon className="w-5 h-5" strokeWidth={1} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`${
          editor.isActive('highlight') ? 'bg-secondary' : ''
        } rounded-md p-1 hover:bg-secondary`}
      >
        <HighlighterIcon
          className="w-5 h-5 text-foreground"
          strokeWidth={2}
          fill="orange"
        />
      </button>

      <button
        onClick={() => editor.commands.unsetAllMarks()}
        className="hover:bg-secondary p-1 rounded-md text-sm"
      >
        unset all
      </button>
    </div>
  );
};

export default TipTapMenu;
