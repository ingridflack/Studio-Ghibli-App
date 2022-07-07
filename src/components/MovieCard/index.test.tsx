import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import MovieCard from ".";
import { FavoriteProvider } from "../../hooks/useFavorite";
import theme from "../../styles/theme";

const MOVIE_MOCK = {
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
};

const LONG_DESCRIPTION_MOVIE_MOCK = {
  ...MOVIE_MOCK,
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex libero aperiam voluptatum ipsam commodi veritatis nobis porro assumenda inventore vitae odit ducimus officiis, iusto dolorum quisquam eius et tempore.",
};

const NO_BANNER_MOVIE_MOCK = {
  ...MOVIE_MOCK,
  movie_banner: "",
};

const useFavorite = jest.spyOn(
  require("../../hooks/useFavorite"),
  "useFavorite"
);

describe("MovieCard", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <FavoriteProvider>
          <MovieCard movie={MOVIE_MOCK} />
        </FavoriteProvider>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should toggle the favorite icon", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FavoriteProvider>
          <MovieCard movie={MOVIE_MOCK} />
        </FavoriteProvider>
      </ThemeProvider>
    );

    const noFavoriteIcon = getByTestId("no-favorited");
    expect(noFavoriteIcon).toBeTruthy();

    const favoriteBtn = getByTestId("favorite-btn");
    fireEvent.click(favoriteBtn);

    const favoritedIcon = getByTestId("favorited");
    expect(favoritedIcon).toBeTruthy();

    fireEvent.click(favoriteBtn);

    expect(noFavoriteIcon).toBeTruthy();
  });

  it("should not render the read more button", () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <FavoriteProvider>
          <MovieCard movie={MOVIE_MOCK} />
        </FavoriteProvider>
      </ThemeProvider>
    );

    const toggleDescriptionBtn = queryByTestId("toggle-description");
    expect(toggleDescriptionBtn).toBeFalsy();
  });

  it("should toggle the read more button", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FavoriteProvider>
          <MovieCard movie={LONG_DESCRIPTION_MOVIE_MOCK} />
        </FavoriteProvider>
      </ThemeProvider>
    );

    const toggleDescriptionBtn = getByTestId("toggle-description");
    expect(toggleDescriptionBtn.innerHTML).toEqual("+ read more");

    fireEvent.click(toggleDescriptionBtn);
    expect(toggleDescriptionBtn.innerHTML).toEqual("- read less");
  });

  it("should render the placeholder image", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <FavoriteProvider>
          <MovieCard movie={NO_BANNER_MOVIE_MOCK} />
        </FavoriteProvider>
      </ThemeProvider>
    );

    const movieBanner = getByTestId("movie-banner");

    expect(movieBanner.getAttribute("src")).toEqual(
      "/assets/placeholder-image.png"
    );
  });
});
