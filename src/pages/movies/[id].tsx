import Head from "next/head";
import { useRouter } from "next/router";
import { getMovie, getMovies, getPersonByURL } from "../../services";
import { IMovie, IPerson } from "../../types";
import Movie from "../../views/Movie";

interface MoviesPageProps {
  movie: IMovie;
  people: IPerson;
}

const MoviesPage = ({ movie, people }: MoviesPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Studio Ghibli - {movie.title}</title>
        <meta name="description" content={movie.description} />
      </Head>

      <Movie movie={movie} people={people} />
    </>
  );
};

export async function getStaticPaths() {
  const { data: movies } = await getMovies();

  const paths = movies.map(({ id }: IMovie) => ({ params: { id } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const { id: movieId } = params;

  try {
    const { data: movie } = await getMovie(movieId);

    const peoplePromises = movie.people.map(getPersonByURL);

    const people = (await Promise.all(peoplePromises)).flatMap(
      ({ data }) => data
    );

    return {
      props: {
        movie,
        people,
      },
    };
  } catch {
    return { notFound: true };
  }
}

export default MoviesPage;
