import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Work from "../pages/work/index";

expect.extend(toHaveNoViolations);

describe("Work page accessibility", () => {
  it("has no detectable a11y violations", async () => {
    const { container } = render(<Work />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
