import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import About from "../pages/about/index";

expect.extend(toHaveNoViolations);

describe("About page accessibility", () => {
  it("has no detectable a11y violations", async () => {
    const { container } = render(<About />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
