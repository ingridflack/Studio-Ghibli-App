import { ChangeEvent, useMemo, useState } from "react";

import MovieCard from "../../components/MovieCard";
import Header from "../../components/Header";
import { IMovie } from "../../types";

import * as S from "./styles";
import Alert from "../../components/Alert";
import { AiOutlineSearch } from "react-icons/ai";
import { MainContainer } from "../../styles/shared";
interface HomeProps {
  movies: IMovie[];
}

const Home = ({ movies }: HomeProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    setSearchValue(search);
  };

  const filteredMovies = useMemo(
    () =>
      movies.filter(({ title }) =>
        title.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [movies, searchValue]
  );

  return (
    <>
      <Header />

      <S.Form>
        <S.Input
          placeholder="Search"
          value={searchValue}
          onChange={handleSearch}
        />
        <AiOutlineSearch />
      </S.Form>

      <S.MoviesList>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

        {!filteredMovies.length && <Alert>No results found</Alert>}
      </S.MoviesList>
    </>
  );
};

export default Home;
