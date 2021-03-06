import { MouseEvent } from "react";

import { MainContainer } from "../../styles/shared";
import { IMovie, IPerson } from "../../types";

import { SiRottentomatoes } from "react-icons/si";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import * as S from "./styles";
import { useFavorite } from "../../hooks/useFavorite";

import Header from "../../components/Header";
import PersonInfo from "../../components/PersonInfo";

interface MoviesPageProps {
  movie: IMovie;
  people: any;
}

const MovieView = ({ movie, people }: MoviesPageProps) => {
  const { checkFavorite, toggleFavorite } = useFavorite();

  const isFavorite = checkFavorite(movie);

  const handleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    toggleFavorite(movie);
  };

  const {
    title,
    description,
    director,
    producer,
    release_date,
    rt_score,
    movie_banner,
  } = movie;

  return (
    <>
      <MainContainer>
        <S.Header backgroundImage={movie_banner}>
          <Header />

          <S.HeaderContent>
            <S.Title data-testid="movie-title">{title}</S.Title>

            <S.ButtonsContainer>
              {!!rt_score && (
                <S.RTBox>
                  <SiRottentomatoes /> {rt_score}%
                </S.RTBox>
              )}

              <S.FavoriteButton active={isFavorite} onClick={handleFavorite}>
                {isFavorite ? (
                  <>
                    <BsHeartFill /> Favorited
                  </>
                ) : (
                  <>
                    <BsHeart /> Add to favorites
                  </>
                )}
              </S.FavoriteButton>
            </S.ButtonsContainer>
          </S.HeaderContent>
        </S.Header>

        <S.Content>
          <S.InfoTitle>Description</S.InfoTitle>

          <S.Description>{description}</S.Description>

          <S.ProducerInfo>
            <span>
              <strong>Director: </strong>
              {director || "Unknown"}
            </span>
            <span>
              <strong>Producer: </strong>
              {producer || "Unknown"}
            </span>
            <span>
              <strong>Release date: </strong>
              {release_date || "Unknown"}
            </span>
          </S.ProducerInfo>

          <S.InfoTitle>Cast</S.InfoTitle>
          <S.Cast>
            {people.map((person: IPerson) => (
              <PersonInfo key={person.id} data={person} />
            ))}
          </S.Cast>
        </S.Content>
      </MainContainer>
    </>
  );
};

export default MovieView;
