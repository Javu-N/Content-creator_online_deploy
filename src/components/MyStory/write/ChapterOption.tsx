import { CircleCheck } from 'lucide-react';

const ChapterOption = () => {
  return (
    <li className="flex justify-between px-4 py-2 hover:bg-background hover:cursor-pointer border-b border-b-gay-200">
      <div className="flex flex-col items-start">
        <h4 className="font-bold">Chapter Title</h4>
        <div>
          <span className="text-sm text-green-400">Published</span>
          <span className="text-sm text-muted-foreground">
            {''}- Nov 11, 2024
          </span>
        </div>
      </div>
      <div>
        <CircleCheck className="text-green-400" />
      </div>
    </li>
  );
};

export default ChapterOption;
