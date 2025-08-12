import { render } from "@testing-library/react";
import Transition from "../components/Transition";

describe("Transition", () => {
  it("renders three layers", () => {
    const { container } = render(<Transition />);
    const layers = container.querySelectorAll("div");
    // framer-motion mocked to simple divs; expect 3 top-level motion divs
    expect(layers.length).toBeGreaterThanOrEqual(3);
  });
});
