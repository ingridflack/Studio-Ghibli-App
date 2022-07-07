import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Tooltip from ".";
import theme from "../../styles/theme";

describe("Tooltip", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Tooltip text="Test" />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
