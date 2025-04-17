export interface Genre {
  genreId: number;
  genreName: string;
}

export interface ApiResponse {
  status: number;
  result: Genre[];
}
