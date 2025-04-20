import { cn } from "@/lib/utils";
import { Genre } from "@/types/Genre";

interface GenreSelectProps {
  genreList: Genre[] | null;
  loading: boolean;
  loadGenreError: boolean | null;
  selectedGenres: Genre[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
}

const GenreSelect = ({
  selectedGenres,
  setSelectedGenres,
  genreList,
  loading,
  loadGenreError,
}: GenreSelectProps) => {
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

  return (
    <div className="flex flex-col gap-3 ">
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
        <div className="px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-[50vh] overflow-auto pb-2">
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
    </div>
  );
};

export default GenreSelect;
