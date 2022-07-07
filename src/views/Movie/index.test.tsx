import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Movie from ".";
import theme from "../../styles/theme";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const useFavorite = jest.spyOn(
  require("../../hooks/useFavorite"),
  "useFavorite"
);

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

const PEOPLE_MOCK = [
  { name: "Person 1", gender: "Female", age: "12", id: "1" },
  { name: "Person 2", gender: "Female", age: "13", id: "2" },
];

describe("Movie", () => {
  it("should match snapshot", () => {
    (useFavorite as jest.Mock).mockReturnValue({
      checkFavorite: jest.fn().mockReturnValue(true),
    });
    useRouter.mockImplementation(() => ({
      pathname: "/movie",
    }));

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Movie movie={MOVIE_MOCK} people={PEOPLE_MOCK} />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
