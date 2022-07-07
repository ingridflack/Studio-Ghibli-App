import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Home from ".";
import theme from "../../styles/theme";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const useFavorite = jest.spyOn(
  require("../../hooks/useFavorite"),
  "useFavorite"
);

const MOVIE_LIST_MOCK = [
  {
    id: "234",
    title: "Title test",
    description: "Description test",
    director: "Director test",
    producer: "Producer test",
    movie_banner: "/assets/studio-ghibli-logo.webp",
    rt_score: "90",
    release_date: "1980",
    people: ["Person 1"],
    original_title: "Original title test",
  },
  {
    id: "2345",
    title: "Title test 2",
    description: "Description test 2",
    director: "Director test 2",
    producer: "Producer test 2",
    movie_banner: "/assets/studio-ghibli-logo.webp",
    rt_score: "90 2",
    release_date: "1980 2",
    people: ["Person 12"],
    original_title: "Original title test 2",
  },
];

describe("Home", () => {
  useRouter.mockImplementation(() => ({
    pathname: "/",
  }));

  it("should render the movie list correctly", () => {
    (useFavorite as jest.Mock).mockReturnValue({
      checkFavorite: jest.fn().mockReturnValue(true),
    });

    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Home movies={MOVIE_LIST_MOCK} />
      </ThemeProvider>
    );

    const movieCard = getAllByTestId("movie-card-container");

    expect(movieCard).toHaveLength(2);
  });

  it("should match snapshot", () => {
    (useFavorite as jest.Mock).mockReturnValue({
      checkFavorite: jest.fn().mockReturnValue(true),
    });

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Home movies={MOVIE_LIST_MOCK} />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
