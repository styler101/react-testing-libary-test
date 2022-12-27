import { screen, render } from "@testing-library/react";
import Login from "./index";

describe("Login Component", () => {
  test("Ensure the Login Component is render", () => {
    render(<Login />);
  });

  test("Ensure the component has a current title as heading 2", () => {
    render(<Login />);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toEqual(screen.getByRole("heading", { level: 2 }));
  });

  test("Ensure the title has a current text", () => {
    render(<Login />);
    const text = screen.getByRole("heading", { level: 2 });
    expect(text.innerHTML).toBe(" React Testing App");
  });
});
