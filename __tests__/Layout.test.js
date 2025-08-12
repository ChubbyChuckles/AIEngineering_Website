import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";

jest.mock("../components/TopLeftImg", () => () => (
  <div data-testid="top-left-img" />
));
jest.mock("../components/Nav", () => () => <nav data-testid="nav" />);
jest.mock("../components/Header", () => () => <header data-testid="header" />);

describe("Layout", () => {
  it("renders structural children and wrappers", () => {
    render(
      <Layout>
        <main>Content</main>
      </Layout>
    );
    expect(screen.getByTestId("top-left-img")).toBeInTheDocument();
    expect(screen.getByTestId("nav")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
