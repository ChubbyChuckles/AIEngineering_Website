import { render, screen } from "@testing-library/react";
import WorkSlider from "../components/WorkSlider";

describe("WorkSlider", () => {
  it("renders slides with images", () => {
    render(<WorkSlider />);
    const slides = screen.getAllByTestId("swiper-slide");
    expect(slides.length).toBeGreaterThan(0);
    // images mocked via next/image to img tag
    const imgs = screen.getAllByRole("img", { hidden: true });
    expect(imgs.length).toBeGreaterThan(0);
  });
});
