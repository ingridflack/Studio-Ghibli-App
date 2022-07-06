import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { IMovie } from "../types";

interface FavoriteProviderProps {
  children: ReactNode;
}

interface FavoriteContextData {
  favorites: IMovie[];
  checkFavorite: (movie: IMovie) => boolean;
  toggleFavorite: (movie: IMovie) => void;
}

const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData
);

const STORAGE_FAVORITE_KEY = "@FavoriteMovies:favorites";

export function FavoriteProvider({
  children,
}: FavoriteProviderProps): JSX.Element {
  const [favorites, setFavorites] = useState<IMovie[]>([]);

  useEffect(() => {
    const storagedFavorites = localStorage.getItem(STORAGE_FAVORITE_KEY);

    const favorites = storagedFavorites ? JSON.parse(storagedFavorites) : [];

    setFavorites(favorites);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_FAVORITE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const checkFavorite = (movie: IMovie): boolean =>
    favorites.some((item) => item.id === movie.id);

  const addFavorite = (movie: IMovie) => {
    setFavorites((favorites: IMovie[]) => [...favorites, movie]);

    toast.success("Adicionado aos favoritos com sucesso.");
  };

  const removeFavorite = (movie: IMovie) => {
    setFavorites((favorites) =>
      favorites.filter((item) => item.id !== movie.id)
    );

    toast.success("Removido dos favoritos com sucesso.");
  };

  const toggleFavorite = (movie: IMovie) => {
    if (checkFavorite(movie)) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        checkFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);

  return context;
}
