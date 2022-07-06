import Alert from "../../components/Alert";
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import { useFavorite } from "../../hooks/useFavorite";
import { MainContainer } from "../../styles/shared";
import { IMovie } from "../../types";
import { MoviesList } from "../Home/styles";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorite();
  return (
    <MainContainer>
      <Header />

      <h1>Meus filmes favoritos</h1>

      <MoviesList>
        {favorites.map((movie: IMovie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

        {!favorites.length && <Alert>No favorites added</Alert>}
      </MoviesList>
    </MainContainer>
  );
};

export default Favorites;
