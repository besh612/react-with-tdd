import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Button has correct initial color with text", () => {
  render(<App />);
  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Button color and text is changed when button clicked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});
