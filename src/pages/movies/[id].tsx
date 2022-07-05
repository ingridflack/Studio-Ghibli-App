import type { NextPage } from "next";
import Head from "next/head";
import Movie from "../../views/Movie";

const MoviesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Movie />
      </main>
    </>
  );
};

export default MoviesPage;
