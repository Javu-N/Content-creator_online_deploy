import { Editor } from '@tiptap/react';
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
          editor.isActive('bold') ? 'bg-muted-foreground' : ''
        } rounded-md p-2 hover:bg-muted-foreground`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${
          editor.isActive('italic') ? 'bg-muted-foreground' : ''
        } rounded-md p-2 hover:bg-muted-foreground`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`${
          editor.isActive('underline') ? 'bg-muted-foreground' : ''
        } rounded-md p-2 hover:bg-muted-foreground`}
      >
        Underline
      </button>
    </div>
  );
};

export default TipTapMenu;
