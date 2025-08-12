import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Contact from "../pages/contact/index";

expect.extend(toHaveNoViolations);

describe("Contact page accessibility", () => {
  it("has no detectable a11y violations", async () => {
    const { container } = render(<Contact />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
