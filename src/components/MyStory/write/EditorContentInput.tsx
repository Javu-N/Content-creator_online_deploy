import { Editor, EditorContent } from '@tiptap/react';
import React from 'react';

interface EditorContentInputProps {
  editor: Editor | null;
}

const EditorContentInput = ({ editor }: EditorContentInputProps) => {
  return <EditorContent editor={editor} />;
};

export default EditorContentInput;
