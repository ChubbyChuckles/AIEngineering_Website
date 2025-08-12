import { render, screen } from "@testing-library/react";
import ParticlesContainer from "../components/ParticlesContainer";

describe("ParticlesContainer", () => {
  it("renders particles placeholder div", () => {
    render(<ParticlesContainer />);
    expect(screen.getByTestId("particles")).toBeInTheDocument();
  });
});
