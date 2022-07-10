import type { NextPage } from "next";
import Head from "next/head";
import { MainContainer } from "../../styles/shared";
import Favorites from "../../views/Favorites";

const FavoritesPage: NextPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>Studio Ghibli - Favorite movies</title>
      </Head>

      <Favorites />
    </MainContainer>
  );
};

export default FavoritesPage;
