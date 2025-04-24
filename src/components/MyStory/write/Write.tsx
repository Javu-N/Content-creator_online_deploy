'use client';

import React, { useEffect, useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDown, PlusCircleIcon, TypeOutlineIcon } from 'lucide-react';
import TipTapMenu from './TipTapMenu';
import ChapterOption from './ChapterOption';
import StarterKit from '@tiptap/starter-kit';
import { useEditor } from '@tiptap/react';
import EditorContentInput from './EditorContentInput';
import { Placeholder } from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Slider } from '@/components/ui/slider';

const Write = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      Placeholder.configure({
        placeholder: 'Write your chapter here...',
      }),
    ],
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    editorProps: {
      attributes: {
        class:
          'w-[95vw] bg-card min-h-[60vh] px-5 py-5 rounded-b-md focus:outline-none',
      },
    },
  });
  const [textSize, setTextSize] = useState(12);
  const [isMounted, setIsMounted] = useState(false);

  const blurEditor = () => {
    // Find the editor's content DOM element
    (document.activeElement as HTMLElement)?.blur();
    const el = document.querySelector('.ProseMirror');
    if (el instanceof HTMLElement) {
      el.blur();
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !editor) return null;

  return (
    <div className="pt-[70px] flex flex-col items-center">
      <div className="w-full lg:w-[90vw] bg-card border-[0.5px] border-muted-foreground fixed rounded-md py-2 px-3 flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between md:items-center z-10">
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center justify-between gap-1 bg-secondary rounded-md px-2 py-1 hover:bg-background md:w-[40%] lg:w-[30%] xl:w-[20%]">
              <div className="flex flex-col items-start">
                <h1 className="text-lg md:text-xl font-bold">Story Title</h1>
                <span className="text-sm text-left">Current Chapter Title</span>
              </div>
              <div>
                <ChevronDown className="text-muted-foreground" size={16} />
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-96 bg-secondary flex flex-col px-0 py-2 gap-2">
            <div className="flex justify-center border-b border-b-muted-foreground py-2 w-full">
              <h3 className="font-bold">Chapter List</h3>
            </div>
            <ul className="max-h-[250px] overflow-auto w-full">
              <ChapterOption />
            </ul>
            <div className="flex justify-center">
              <button className="bg-rainbow py-1 px-4 rounded-md text-sm flex gap-1 items-center active:scale-95">
                <span>Add</span>
                <PlusCircleIcon className="w-5 h-5" strokeWidth={1} />
              </button>
            </div>
          </PopoverContent>
        </Popover>

        {/* functional button */}
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-rainbow py-1 px-3 text-sm rounded-md active:scale-95">
            Publish
          </button>

          <button className="bg-foreground text-background py-1 px-3 text-sm rounded-md active:scale-95">
            Save
          </button>

          <button className="bg-foreground text-background py-1 px-3 text-sm rounded-md active:scale-95">
            Preview
          </button>
        </div>
      </div>

      <div className="mt-[135px] md:mt-[85px] fixed z-10 flex justify-center gap-2 items-center">
        <TipTapMenu editor={editor} />

        <Drawer>
          <DrawerTrigger asChild>
            <button
              className="bg-secondary py-1 px-2 rounded-xl flex gap-1 items-center active:scale-95"
              onClick={blurEditor}
            >
              <span>Resize</span>
              <TypeOutlineIcon className="w-4 h-4" strokeWidth={1} />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm h-[25vh]">
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Modify text size</DrawerTitle>
                <DrawerDescription>Ranging from 12px to 24px</DrawerDescription>
              </DrawerHeader>

              <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-6xl font-bold">
                  {textSize}
                  <span className="text-3xl">px</span>
                </h1>
                <Slider
                  defaultValue={[12]}
                  min={12}
                  max={24}
                  step={1}
                  className="w-[60%]"
                  onValueChange={([val]) => setTextSize(val)}
                  value={[textSize]}
                />
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="mt-[195px] md:mt-[135px]">
        <input
          className="bg-card w-[95vw] px-4 py-4 text-center focus:outline-none text-xl border-b-[0.5px] border-b-background rounded-t-md placeholder:text-muted-foreground"
          type="text"
          placeholder="Type your chapter name"
        />
        <EditorContentInput editor={editor} textSize={textSize} />
      </div>
    </div>
  );
};

export default Write;
