import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Alert from ".";
import theme from "../../styles/theme";

describe("Alert", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Alert>Teste</Alert>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
