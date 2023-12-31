import { useState } from "react";
import { Header, Footer } from "./components";
import { FormAddFriend, FriendsList, Home, NotFound } from "./pages";
import mockFriends from "./mockFriends";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [friends, setFriends] = useState(mockFriends);

  return (
    <div className="body-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friendlist" element={<FriendsList />} />
        <Route path="/friendnew" element={<FormAddFriend />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
