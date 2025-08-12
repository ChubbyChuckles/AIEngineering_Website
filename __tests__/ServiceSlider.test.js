import { render, screen } from "@testing-library/react";
import ServiceSlider from "../components/ServiceSlider";

// Because Swiper is mocked, slides are simple div wrappers.

describe("ServiceSlider", () => {
  it("renders multiple slides", () => {
    render(<ServiceSlider />);
    const slides = screen.getAllByTestId("swiper-slide");
    // Expect at least 5 (we know there are 7 in data) but avoid tying strictly to internal count; use >=7 for accuracy
    expect(slides.length).toBeGreaterThanOrEqual(7);
  });
});
