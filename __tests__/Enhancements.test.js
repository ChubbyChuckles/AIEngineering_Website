import { render, screen, act } from "@testing-library/react";
import Enhancements from "../components/Enhancements";

// Basic tests: progress bar renders and back-to-top appears after simulated scroll.

describe("Enhancements", () => {
  beforeEach(() => {
    // jsdom lacks layout; mock scroll metrics
    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 2000,
      configurable: true,
    });
    Object.defineProperty(window, "innerHeight", {
      value: 1000,
      configurable: true,
    });
    window.scrollTo = ({ top }) => {
      Object.defineProperty(window, "pageYOffset", {
        value: top,
        configurable: true,
      });
      Object.defineProperty(document.documentElement, "scrollTop", {
        value: top,
        configurable: true,
      });
      window.dispatchEvent(new Event("scroll"));
    };
  });

  it("renders progress bar", () => {
    render(<Enhancements />);
    expect(screen.getByTestId("scroll-progress")).toBeInTheDocument();
  });

  it("shows back to top after scrolling", async () => {
    render(<Enhancements />);
    await act(async () => {
      window.scrollTo({ top: 1200, behavior: "auto" });
    });
    expect(
      screen.getByRole("button", { name: /back to top/i })
    ).toBeInTheDocument();
  });
});
