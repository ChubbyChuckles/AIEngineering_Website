import { render, screen } from "@testing-library/react";
import Avatar from "../components/Avatar";

describe("Avatar", () => {
  it("renders avatar image", () => {
    render(<Avatar />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/avatar2.png");
  });
});
