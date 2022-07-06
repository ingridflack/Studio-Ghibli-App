import Link from "next/link";
import { MouseEvent, useState } from "react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useFavorite } from "../../hooks/useFavorite";

import { IMovie } from "../../types";

import * as S from "./styles";
interface MovieCardProps {
  movie: IMovie;
}

const MAX_DESCRIPTION_LENGTH = 125;

const MovieCard = ({ movie }: MovieCardProps) => {
  const {
    id,
    title,
    original_title,
    description,
    director,
    movie_banner = "/assets/placeholder-image.png",
  } = movie;

  const shouldShowMoreButton = description.length > MAX_DESCRIPTION_LENGTH;
  const [showDescription, setShowDescription] = useState(false);
  const { checkFavorite, toggleFavorite } = useFavorite();

  const isFavorite = checkFavorite(movie);

  const handleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    toggleFavorite(movie);
  };

  const handleShowDescription = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setShowDescription((prev) => !prev);
  };

  const renderDescription = () => {
    if (!shouldShowMoreButton) return description;

    return (
      <>
        {showDescription
          ? description
          : `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`}

        <S.ToggleDescriptionButton
          type="button"
          onClick={handleShowDescription}
        >
          {showDescription ? "- read less" : "+ read more"}
        </S.ToggleDescriptionButton>
      </>
    );
  };

  return (
    <Link href={`/movies/${id}`} passHref>
      <S.Container>
        <S.Image src={movie_banner} alt={`${title} movie banner`} />

        <S.TextContainer>
          <S.Title>
            {title}

            <S.FavoriteBtn type="button" onClick={handleFavorite}>
              {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            </S.FavoriteBtn>
          </S.Title>

          <S.OriginalTitle>{original_title}</S.OriginalTitle>

          {!!director && (
            <S.Director>
              <strong>Director:</strong> {director}
            </S.Director>
          )}

          <S.Description>{renderDescription()}</S.Description>
        </S.TextContainer>
      </S.Container>
    </Link>
  );
};

export default MovieCard;
