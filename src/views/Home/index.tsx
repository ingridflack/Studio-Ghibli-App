import MovieCard from "../../components/MovieCard";
import { IMovie } from "../../types";

import * as S from "./styles";
interface HomeProps {
  movies: IMovie[];
}

const Home = ({ movies }: HomeProps) => {
  return (
    <S.MoviesList>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </S.MoviesList>
  );
};

export default Home;
