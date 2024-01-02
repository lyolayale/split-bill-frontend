import { render, screen } from "@testing-library/react";
import FriendEdit from "../pages/FriendEdit";
import { BrowserRouter } from "react-router-dom";

describe("<FriendEdit/>", () => {
  function friendEdit() {
    return render(
      <BrowserRouter>
        <FriendEdit />
      </BrowserRouter>
    );
  }
  it("renders without errors", () => {
    friendEdit();
  });
  it("contains the correct label text", () => {
    friendEdit();
    expect(screen.getByText(/friend's name/i)).toBeInTheDocument();
    expect(screen.getByText(/transaction name/i)).toBeInTheDocument();
    expect(screen.getByText(/adjust amount/i)).toBeInTheDocument();
    expect(screen.getByText(/new balance/i)).toBeInTheDocument();
  });
  it("contain a X, close link", () => {
    friendEdit();
    expect(screen.getByText(/x/i)).toBeInTheDocument();
  });
  it("contain a submit button, 'edit transaction'", () => {
    friendEdit();
    expect(
      screen.getByRole("button", { name: /edit transaction/i })
    ).toBeInTheDocument();
  });
});
