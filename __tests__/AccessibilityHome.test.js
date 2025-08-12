import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Home from "../pages/index";

expect.extend(toHaveNoViolations);

describe("Home page accessibility", () => {
  it("has no detectable a11y violations", async () => {
    const { container } = render(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
