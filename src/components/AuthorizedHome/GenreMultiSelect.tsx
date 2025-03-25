import { useState } from "react";
import { cn } from "@/lib/utils";

const genres = [
  { name: "Fantasy", color: "bg-blue-500" },
  { name: "Science Fiction", color: "bg-green-500" },
  { name: "Mystery", color: "bg-yellow-500" },
  { name: "Romance", color: "bg-red-500" },
  { name: "Thriller", color: "bg-purple-500" },
  { name: "Horror", color: "bg-gray-500" },
  { name: "Historical", color: "bg-orange-500" },
  { name: "Non-Fiction", color: "bg-teal-500" },
  { name: "Adventure", color: "bg-indigo-500" },
  { name: "Dystopian", color: "bg-pink-500" },
  { name: "Cyberpunk", color: "bg-cyan-500" },
  { name: "Steampunk", color: "bg-lime-500" },
  { name: "Magical Realism", color: "bg-emerald-500" },
  { name: "Gothic", color: "bg-rose-500" },
  { name: "Crime", color: "bg-fuchsia-500" },
  { name: "Supernatural", color: "bg-violet-500" },
  { name: "Comedy", color: "bg-amber-500" },
  { name: "Drama", color: "bg-sky-500" },
  { name: "Slice of Life", color: "bg-neutral-500" },
  { name: "Psychological", color: "bg-red-600" },
  { name: "Espionage", color: "bg-green-600" },
  { name: "Paranormal", color: "bg-blue-600" },
  { name: "Military", color: "bg-gray-600" },
  { name: "Survival", color: "bg-orange-600" },
  { name: "Western", color: "bg-yellow-600" },
  { name: "Mythology", color: "bg-purple-600" },
  { name: "Dark Fantasy", color: "bg-teal-600" },
];

interface Props {
  setBasicStep: (value: boolean) => void;
  setGenreStep: (value: boolean) => void;
}

const GenreMultiSelect = ({ setBasicStep, setGenreStep }: Props) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleGoBack = () => {
    setBasicStep(true);
    setGenreStep(false);
  };

  return (
    <div className="flex flex-col  gap-3">
      <div className="px-4 flex justify-center">
        <span className="font-mono">Choose some genres</span>
      </div>
      <div className="px-4 grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[50vh] overflow-auto pb-2">
        {genres.map((genre) => {
          return (
            <label
              className={cn(
                "rounded-md px-2 py-2 hover:cursor-pointer",
                selectedGenres.includes(genre.name)
                  ? "bg-rainbow"
                  : "bg-background"
              )}
              key={genre.name}
            >
              <input
                type="checkbox"
                checked={selectedGenres.includes(genre.name)}
                onChange={() => toggleGenre(genre.name)}
                className="hidden"
              />

              <span className="text-sm font-mono font-semibold">
                {genre.name}
              </span>
            </label>
          );
        })}
      </div>

      <div
        className="
      relative 
      after:absolute 
      after:bottom-0 
      after:left-0 
      after:w-full 
      after:h-[0.1px] 
      after:bg-[#303233]"
      ></div>

      <div className="px-4 flex gap-2 items-center font-semibold">
        <button
          className="w-full px-3 py-2 bg-foreground text-background rounded-md active:scale-95"
          type="button"
          onClick={handleGoBack}
        >
          Go Back
        </button>
        <button
          className="w-full px-3 py-2 bg-rainbow rounded-md active:scale-95"
          type="submit"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default GenreMultiSelect;
