import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from ".";
import theme from "../../styles/theme";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Header", () => {
  it("should match snapshot", () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/favorites",
    }));

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
