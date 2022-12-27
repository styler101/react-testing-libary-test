import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./pages/Login";

describe("App Component", () => {
  test("renders learn react link", () => {
    render(<Login />);
  });
});
