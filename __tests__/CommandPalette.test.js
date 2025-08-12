import { render, screen, act } from "@testing-library/react";
import Layout from "../components/Layout";

// Simple test to verify palette opens via dispatched event

describe("CommandPalette", () => {
  it("opens when custom event fired", async () => {
    render(
      <Layout>
        <div />
      </Layout>
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await act(async () => {
      window.dispatchEvent(new Event("open-command-palette"));
    });
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });
});
