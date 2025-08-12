import { render, screen } from "@testing-library/react";
import Socials from "../components/Socials";

describe("Socials", () => {
  it("renders expected social links with target _blank", () => {
    render(<Socials />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThanOrEqual(4);
    links.forEach((l) => {
      expect(l).toHaveAttribute("target", "_blank");
      expect(l).toHaveAttribute("rel", expect.stringContaining("noopener"));
    });
  });
});
