import { useState } from "react";
import { Header, Footer } from "./components";
import { FormAddFriend, FormSplitBill, FriendsList } from "./pages";
import mockFriends from "./mockFriends";

export default function App() {
  const [friends, setFriends] = useState(mockFriends);

  return (
    <div className="body-wrapper">
      <Header />
      <FormAddFriend />
      <FriendsList />
      <Footer />
    </div>
  );
}
