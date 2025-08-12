import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Testimonials from "../pages/testimonials/index";

expect.extend(toHaveNoViolations);

describe("Testimonials page accessibility", () => {
  it("has no detectable a11y violations", async () => {
    const { container } = render(<Testimonials />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
