import { render, screen } from "@testing-library/react";
import App from "./App";

test("Button has correct initial color with text", () => {
  render(<App />);
  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
