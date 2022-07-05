import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { Movie } from "../../types";

import * as S from "./styles";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const {
    id,
    title,
    description,
    director,
    movie_banner = "/assets/placeholder-image.png",
  } = movie;

  console.log(movie);
  return (
    <S.Container>
      <S.Image src={movie_banner} alt={`Banner do filme ${title}`} />

      <S.TextContainer>
        <S.Title>
          {title}
          <S.FavoriteBtn>
            <AiOutlineHeart />
          </S.FavoriteBtn>
        </S.Title>

        {!!director && (
          <S.Director>
            <strong>Diretor:</strong> {director}
          </S.Director>
        )}

        <S.Description>{description}</S.Description>
      </S.TextContainer>
    </S.Container>
  );
};

export default MovieCard;
