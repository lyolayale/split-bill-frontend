import { render, screen } from "@testing-library/react";
import FormAddFriend from "../pages/FormAddFriend";
import { BrowserRouter } from "react-router-dom";

describe("<FormAddFriend/>", () => {
  const titles = [
    "transaction",
    "name",
    "amount",
    "your half",
    "friends half",
    "paid by",
  ];
  function form() {
    return render(
      <BrowserRouter>
        <FormAddFriend />
      </BrowserRouter>
    );
  }
  it("renders a h2", () => {
    form();
    const heading = screen.getByRole("heading", {
      name: /create new transaction/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("contain a X, close link", () => {
    form();
    expect(screen.getByText(/x/i)).toBeInTheDocument();
  });
  it("has a form with a title entries for transaction", () => {
    form();
    titles.forEach(title => expect(screen.getByTitle(title)).toBeTruthy());
  });
  it("has a submit button", () => {
    form();
    expect(
      screen.getByRole("button", { name: /record new transaction/i })
    ).toBeInTheDocument();
  });
});
