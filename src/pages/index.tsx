import axios from "axios";

import Head from "next/head";

import { getMovies } from "../services";
import { MainContainer } from "../styles/shared";
import { IMovie } from "../types";
import Home from "../views/Home";

interface HomePageProps {
  movies: IMovie[];
}

const HomePage = ({ movies }: HomePageProps) => {
  return (
    <MainContainer>
      <Head>
        <title>Studio Ghibli</title>
      </Head>

      <Home movies={movies} />
    </MainContainer>
  );
};

export async function getStaticProps() {
  try {
    const { data: movies } = await getMovies();

    return {
      props: { movies },
    };
  } catch (e) {
    return {
      props: { error: e },
    };
  }
}

export default HomePage;
