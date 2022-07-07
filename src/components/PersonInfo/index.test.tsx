import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import PersonInfo from ".";
import theme from "../../styles/theme";

const PERSON_MOCK = {
  name: "Test name",
  age: "Test age",
  gender: "Test gender",
  id: "Test id",
};

describe("PersonInfo", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <PersonInfo data={PERSON_MOCK} />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
