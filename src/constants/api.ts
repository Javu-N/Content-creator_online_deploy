export const generateApi = (apiUrl: string, pathParam: string = "") => {
  if (!pathParam) {
    return process.env.NEXT_PUBLIC_API_DOMAIN + apiUrl;
  }
  return process.env.NEXT_PUBLIC_API_DOMAIN + apiUrl + "/" + pathParam;
};

export const API_AUTH_LOGIN = "/auth/login";
export const GET_ALL_GENRES = "/genre/all";
export const CREATE_STORY = "/story";
export const CREATE_NEW_CHAPTER_STORY = "/chapter/new";
export const UPDATE_STORY_GENRE = "/story/updateGenre";
