import { render, screen } from "@testing-library/react";
import FriendsList from "../pages/FriendsList";
import { BrowserRouter } from "react-router-dom";

describe("<FriendsList/>", () => {
  function friendsList() {
    return render(
      <BrowserRouter>
        <FriendsList />
      </BrowserRouter>
    );
  }
  it("renders without errors", () => {
    friendsList();
  });
  it("contains a text with 'activity board'", () => {
    friendsList();
    expect(screen.getByText(/activity board/i)).toBeInTheDocument();
  });
  it("contains a text with '+', representing adding event", () => {
    friendsList();
    expect(screen.getByText(/\+/i)).toBeInTheDocument();
  });
  it("contains a text with 'exit', representing return to home screen", () => {
    friendsList();
    expect(screen.getByText(/exit/i)).toBeInTheDocument();
  });
});
