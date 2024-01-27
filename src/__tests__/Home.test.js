// eslint-disable-next-line testing-library/no-debugging-utils

import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { BrowserRouter } from "react-router-dom";

describe("<Home/>", () => {
  function home() {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  }
  it("renders without errors", () => {
    home();
  });
  it("contains a heading", () => {
    home();
    const heading = screen.getByRole("heading", {
      name: /who needs good karma, when you can have awkward stares/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("contains a paragraph tag", () => {
    home();
    const text = screen.getByText(
      /split the bill! oversee your financial friendship\./i
    );
    expect(text).toBeInTheDocument();
  });
  it("contains a button", () => {
    home();
    const button = screen.getByRole("button", { name: /get started/i });
    expect(button).toBeInTheDocument();
  });
});
