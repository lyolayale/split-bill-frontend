import { render, screen } from "@testing-library/react";
import ClearAllDebt from "../pages/ClearAllDebt";
import { BrowserRouter } from "react-router-dom";

describe("<ClearAllDebt/>", () => {
  function clearDebt() {
    return render(
      <BrowserRouter>
        <ClearAllDebt />
      </BrowserRouter>
    );
  }
  it("renders without errors", () => {
    clearDebt();
  });
  it("contains a h2 heading, 'clear all debt?'", () => {
    clearDebt();
    expect(
      screen.getByRole("heading", { name: /clear all debt\?/i })
    ).toBeInTheDocument();
  });
  it("contains text below h2 heading", () => {
    clearDebt();
    expect(
      screen.getByText(
        /by clicking the clear all debt button below, will permanently delete all debt!/i
      )
    ).toBeInTheDocument();
  });
  it("contains a button 'not now'", () => {
    clearDebt();
    expect(
      screen.getByRole("button", {
        name: /not now/i,
      })
    ).toBeInTheDocument();
  });
  it("contains a button 'clear all debt'", () => {
    clearDebt();
    expect(
      screen.getByRole("button", {
        name: /clear all debt/i,
      })
    ).toBeInTheDocument();
  });
});
