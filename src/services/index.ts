import { api } from "./api";

export const getMovies = (params?: Record<string, string | number>) => {
  return api.get("/films", { params });
};
