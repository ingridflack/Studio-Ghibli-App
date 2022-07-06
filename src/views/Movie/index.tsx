import { MouseEvent } from "react";

import { MainContainer } from "../../styles/shared";
import { IMovie, IPerson } from "../../types";

import { SiRottentomatoes } from "react-icons/si";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import * as S from "./styles";
import { useFavorite } from "../../hooks/useFavorite";

import Header from "../../components/Header";

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

  if (!movie) return null;

  const { title, description, director, producer, release_date, rt_score } =
    movie;

  return (
    <MainContainer>
      <Header />

      <S.Header>
        <S.Title>{title}</S.Title>

        <S.ButtonsContainer>
          {!!rt_score && (
            <S.RTBox>
              <SiRottentomatoes /> {rt_score}%
            </S.RTBox>
          )}

          <S.FavoriteButton active={isFavorite} onClick={handleFavorite}>
            {isFavorite ? (
              <>
                <BsHeartFill /> Favorite
              </>
            ) : (
              <>
                <BsHeart /> Add to favorites
              </>
            )}
          </S.FavoriteButton>
        </S.ButtonsContainer>
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
          {people.map(({ id, name, age, gender }: IPerson) => (
            <S.Person key={id}>
              <S.PersonImage
                src="/assets/user-placeholder.png"
                alt={`${name}'s photo`}
                width={64}
                height={64}
              />

              <S.PersonInfo>
                <p>{name || "Unknown"}</p>
                <span>{(age && `Age: ${age}`) || "Unknown"}</span>
                <span>{gender || "Unknown"}</span>
              </S.PersonInfo>
            </S.Person>
          ))}
        </S.Cast>
      </S.Content>
    </MainContainer>
  );
};

export default MovieView;
