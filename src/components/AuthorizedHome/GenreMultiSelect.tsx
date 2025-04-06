import { cn } from "@/lib/utils";

type Genre = {
  genreId: number;
  genreName: string;
};

interface Props {
  setBasicStep: (value: boolean) => void;
  setGenreStep: (value: boolean) => void;
  setSelectedGenres: (value: Genre[]) => void;
  handlePostStory: () => Promise<void>;
  selectedGenres: Genre[];
  genreList: Genre[] | null;
  loading: boolean;
  loadGenreError: boolean | null;
}

const GenreMultiSelect = ({
  setBasicStep,
  setGenreStep,
  setSelectedGenres,
  handlePostStory,
  selectedGenres,
  genreList,
  loading,
  loadGenreError,
}: Props) => {
  const toggleGenre = (genre: Genre) => {
    if (!selectedGenres.includes(genre)) {
      const updatedSelectedGenres = [...selectedGenres, genre];
      setSelectedGenres(updatedSelectedGenres);
    } else {
      const updatedSelectedGenres = selectedGenres.filter(
        (selectedGenre) => selectedGenre !== genre
      );
      setSelectedGenres(updatedSelectedGenres);
    }
  };

  const handleGoBack = () => {
    setBasicStep(true);
    setGenreStep(false);
  };

  return (
    <div className="flex flex-col  gap-3">
      <div className="px-4 flex justify-center">
        <span className="font-mono text-sm">Choose some genres (Optional)</span>
      </div>

      {loadGenreError && (
        <div className="flex justify-center items-center">
          <span className="text-red-500">Loading Genre Got Error</span>
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      )}

      {genreList && (
        <div className="px-4 grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[50vh] overflow-auto pb-2">
          {genreList.map((genre) => {
            return (
              <label
                className={cn(
                  "rounded-md px-2 py-2 hover:cursor-pointer",
                  selectedGenres.includes(genre)
                    ? "bg-rainbow"
                    : "bg-background"
                )}
                key={genre.genreName}
              >
                <input
                  type="checkbox"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => toggleGenre(genre)}
                  className="hidden"
                />

                <span className="text-xs sm:text-sm font-mono font-semibold">
                  {genre.genreName}
                </span>
              </label>
            );
          })}
        </div>
      )}

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
          type="button"
          onClick={handlePostStory}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default GenreMultiSelect;
