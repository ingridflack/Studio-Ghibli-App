import MovieCard from "../../components/MovieCard";
import { Movie } from "../../types";

import * as S from "./styles";
interface HomeProps {
  movies: Movie[];
}

const Home = ({ movies }: HomeProps) => {
  console.log(movies);
  return (
    <S.MoviesList>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </S.MoviesList>
  );
};

export default Home;
