import { render, screen } from "@testing-library/react";
import Friend from "../pages/Friend";
import { BrowserRouter } from "react-router-dom";

describe("<Friend/>", () => {
  function friend() {
    return render(
      <BrowserRouter>
        <Friend />
      </BrowserRouter>
    );
  }
  it("render the <section title='friend'>", () => {
    friend();
    expect(screen.getByTitle("Friend")).toBeInTheDocument();
  });
  it("render a 'settle debt' button", () => {
    friend();
    expect(
      screen.getByRole("button", { name: /settle debt/i })
    ).toBeInTheDocument();
  });
});
