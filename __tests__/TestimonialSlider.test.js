import { render, screen } from "@testing-library/react";
import TestimonialSlider from "../components/TestimonialSlider";

describe("TestimonialSlider", () => {
  it("renders testimonial names", () => {
    render(<TestimonialSlider />);
    // Expect at least one known testimonial name
    expect(screen.getByText(/Anne Smith/i)).toBeInTheDocument();
  });
});
