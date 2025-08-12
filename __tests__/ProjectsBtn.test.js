import { render, screen } from "@testing-library/react";
import ProjectsBtn from "../components/ProjectsBtn";

describe("ProjectsBtn", () => {
  it("links to /work", () => {
    render(<ProjectsBtn />);
    const workLink = screen.getByRole("link");
    expect(workLink.getAttribute("href")).toBe("/work");
  });
});
