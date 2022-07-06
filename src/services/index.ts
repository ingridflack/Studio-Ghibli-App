import { AxiosResponse } from "axios";
import { IMovie } from "../types";
import { api } from "./api";

export const getMovies = (
  params?: Record<string, string | number>
): Promise<AxiosResponse<IMovie[]>> => {
  return api.get("/films", { params });
};

export const getMovie = (movieId: string): Promise<AxiosResponse<IMovie>> => {
  return api.get(`/films/${movieId}`);
};

export const getPersonByURL = (url: string) => api.get(url);
