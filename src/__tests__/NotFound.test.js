import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";

describe("<NotFound/>", () => {
  function notFound() {
    return render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  }
  it("render without errors", () => {
    notFound();
  });
  it("contains text rendering 'page not found'", () => {
    notFound();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
  it("contain a button that renders, go home", () => {
    notFound();
    expect(
      screen.getByRole("button", { name: /go home/i })
    ).toBeInTheDocument();
  });
});
