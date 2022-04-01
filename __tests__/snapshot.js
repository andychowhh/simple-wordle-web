import { render } from "@testing-library/react";
import Home from "../pages/index";

it("renders homepage unchanged", () => {
  const home = render(<Home />);
  expect(home).toMatchSnapshot();
});
