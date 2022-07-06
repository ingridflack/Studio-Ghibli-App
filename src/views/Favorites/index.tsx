import Alert from "../../components/Alert";
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import { useFavorite } from "../../hooks/useFavorite";
import { IMovie } from "../../types";
import { MoviesList } from "../Home/styles";

import * as S from "./styles";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorite();
  return (
    <>
      <Header />

      <S.Title>Favorites</S.Title>

      <MoviesList>
        {favorites?.map((movie: IMovie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

        {!favorites?.length && <Alert>No favorites added</Alert>}
      </MoviesList>
    </>
  );
};

export default Favorites;
