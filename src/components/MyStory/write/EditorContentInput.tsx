import { Editor, EditorContent } from '@tiptap/react';
import React from 'react';

interface EditorContentInputProps {
  editor: Editor | null;
  textSize: number;
}

const EditorContentInput = ({ editor, textSize }: EditorContentInputProps) => {
  return (
    <EditorContent editor={editor} style={{ fontSize: `${textSize}px` }} />
  );
};

export default EditorContentInput;
