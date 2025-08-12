import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("renders logo link to home and socials block", () => {
    render(<Header />);
    const homeLink = screen
      .getAllByRole("link")
      .find((l) => l.getAttribute("href") === "/");
    expect(homeLink).toBeInTheDocument();
    // Expect at least 4 social links present
    const socialLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href") && l.getAttribute("href") !== "/");
    expect(socialLinks.length).toBeGreaterThanOrEqual(4);
  });
});
