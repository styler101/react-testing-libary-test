import { screen, render } from "@testing-library/react";
import Login from "./index";

describe("Login Component", () => {
  test("Ensure the Login Component is render", () => {
    render(<Login />);
  });

  test("Ensure the component has a correct title as heading2", () => {
    render(<Login />);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toEqual(screen.getByRole("heading", { level: 2 }));
  });

  test("Ensure the title has a current text", () => {
    render(<Login />);
    const text = screen.getByRole("heading", { level: 2 });
    expect(text.innerHTML).toBe(" React Testing App");
  });

  test("Ensure the first label is email", () => {
    render(<Login />);
    const firstLabel = screen.getByLabelText("email");
    expect(firstLabel.getAttribute("for")).toEqual("email");
  });

  test("Ensure that Login has a email input", () => {
    render(<Login />);
    const input = screen.getByTestId("#email");
    expect(input).toBeInTheDocument();
  });

  test("Ensure the email has atribute email", () => {
    render(<Login />);
    const input = screen.getByTestId("#email");
    expect(input.getAttribute("type")).toBe("email");
  });

  test("Ensure the htmlfor label password be password", () => {
    render(<Login />);
    const labelPassword = screen.getByLabelText("password");
    expect(labelPassword.getAttribute("for")).toBe("password");
  });

  test("Ensure the Login screen has a password input", () => {
    render(<Login />);
    const inputPassword = screen.getByTestId("#password");
    expect(inputPassword).toBeInTheDocument();
  });

  test("Ensure the password input has type password", () => {
    render(<Login />);
    const inputPassword = screen.getByTestId("#password");
    expect(inputPassword.getAttribute("type")).toBe("password");
  });
});
