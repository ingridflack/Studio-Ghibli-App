import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Favorites from ".";
import { FavoriteProvider } from "../../hooks/useFavorite";
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

describe("Favorites", () => {
  useRouter.mockImplementation(() => ({
    pathname: "/favorites",
  }));

  it("should render the favorites list correctly", () => {
    (useFavorite as jest.Mock).mockReturnValue({
      favorites: MOVIE_LIST_MOCK,
      checkFavorite: jest.fn().mockReturnValue(true),
    });

    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <FavoriteProvider>
          <Favorites />
        </FavoriteProvider>
      </ThemeProvider>
    );

    const movieCard = getAllByTestId("movie-card-container");

    expect(movieCard).toHaveLength(2);
  });

  it("should render the Alert when the favorites list is empty", () => {
    (useFavorite as jest.Mock).mockReturnValue({
      favorites: [],
      checkFavorite: jest.fn().mockReturnValue(true),
    });

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FavoriteProvider>
          <Favorites />
        </FavoriteProvider>
      </ThemeProvider>
    );

    const alertContainer = getByTestId("alert-container");

    expect(alertContainer).toBeTruthy();
  });

  it("should match snapshot", () => {
    (useFavorite as jest.Mock).mockReturnValue({
      favorites: MOVIE_LIST_MOCK,
      checkFavorite: jest.fn().mockReturnValue(true),
    });

    const { container } = render(
      <ThemeProvider theme={theme}>
        <FavoriteProvider>
          <Favorites />
        </FavoriteProvider>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
