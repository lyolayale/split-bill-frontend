import { render, screen } from "@testing-library/react";
import FriendsList from "../pages/FriendsList";
import { BrowserRouter } from "react-router-dom";
import mockFriends from "../mockFriends";

describe("<FriendsList/>", () => {
  function friendsList() {
    return render(
      <BrowserRouter>
        <FriendsList friends={mockFriends} />
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
    expect(screen.getByRole("link", { name: /\+/i })).toBeInTheDocument();
  });
  it("contains a text with 'exit', representing return to home screen", () => {
    friendsList();
    expect(screen.getByText(/exit/i)).toBeInTheDocument();
  });
  it("contain a 'clear all debt' button", () => {
    friendsList();
    expect(
      screen.getByRole("button", {
        name: /clear all debt/i,
      })
    ).toBeInTheDocument();
  });
  it("contains all friend attributes", () => {
    friendsList();
    mockFriends.map(friend => {
      const obj = {
        one: expect(screen.getByText(friend.name)).toBeInTheDocument(),
        two: expect(screen.getByText(friend.event)).toBeInTheDocument(),
        three: expect(
          screen.getByText(`$${friend.balance}`)
        ).toBeInTheDocument(),
      };
      return obj;
    });
  });
  it("contains a '+' representing positive balance", () => {
    friendsList();
    expect(screen.getByRole("heading", { name: /\+\W/i })).toBeInTheDocument();
  });
  it("contains a '-' representing negative balance", () => {
    friendsList();
    expect(screen.getByRole("heading", { name: /\-\W/i })).toBeInTheDocument();
  });
});
