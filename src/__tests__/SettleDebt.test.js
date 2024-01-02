import { render, screen } from "@testing-library/react";
import SettleDebt from "../pages/SettleDebt";
import { BrowserRouter } from "react-router-dom";

describe("<SettleDebt/>", () => {
  function settleDebt() {
    return render(
      <BrowserRouter>
        <SettleDebt />
      </BrowserRouter>
    );
  }
  it("renders without errors", () => {
    settleDebt();
  });
  it("contains a h2 heading, 'settle debt with ?'", () => {
    settleDebt();
    expect(
      screen.getByRole("heading", { name: /settle debt with \?/i })
    ).toBeInTheDocument();
  });
  it("contains text below h2 heading", () => {
    settleDebt();
    expect(
      screen.getByText(
        /by clicking the settle debt button below, will permanently delete transaction: with \./i
      )
    ).toBeInTheDocument();
  });
  it("contains a button 'not not'", () => {
    settleDebt();
    expect(
      screen.getByRole("button", {
        name: /not now/i,
      })
    ).toBeInTheDocument();
  });
  it("contains a button 'settle debt'", () => {
    settleDebt();
    expect(
      screen.getByRole("button", {
        name: /settle debt/i,
      })
    ).toBeInTheDocument();
  });
});
