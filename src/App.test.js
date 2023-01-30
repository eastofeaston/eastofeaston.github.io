import { render, screen } from "@testing-library/react";
import App from "./App";

test("eastofeaston: renders github link", () => {
  render(<App />);
  const linkElement = screen.getByText(/github/i);
  expect(linkElement).toBeInTheDocument();
});

test("eastofeaston: renders linkedin link", () => {
  render(<App />);
  const linkElement = screen.getByText(/linkedin/i);
  expect(linkElement).toBeInTheDocument();
});
