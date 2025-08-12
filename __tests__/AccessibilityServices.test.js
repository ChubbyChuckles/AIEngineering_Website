import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Services from "../pages/services/index";

expect.extend(toHaveNoViolations);

describe("Services page accessibility", () => {
  it("has no detectable a11y violations", async () => {
    const { container } = render(<Services />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
