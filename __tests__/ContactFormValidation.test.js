import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../pages/contact";

// Minimal tests for form validation and success toast

describe("Contact form validation", () => {
  it("shows errors for empty submission", async () => {
    render(<Contact />);
    fireEvent.click(screen.getByRole("button", { name: /let's talk/i }));
    // validation occurs synchronously in validate(); waitFor ensures DOM updates flushed
    await waitFor(() => {
      expect(screen.getAllByRole("alert")).toHaveLength(4);
    });
  });

  it("submits when valid and shows success", async () => {
    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText(/name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/subject/i), {
      target: { value: "Hello" },
    });
    fireEvent.change(screen.getByPlaceholderText(/message/i), {
      target: { value: "This is a long enough message" },
    });
    fireEvent.click(screen.getByRole("button", { name: /let's talk/i }));
    await waitFor(() => expect(screen.getByRole("status")).toBeInTheDocument());
  });
});
