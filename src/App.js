import { useState, useEffect } from "react";
import { Header, Footer } from "./components";
import {
  FormAddFriend,
  FriendsList,
  FriendEdit,
  Home,
  NotFound,
} from "./pages";
import mockFriends from "./mockFriends";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [friends, setFriends] = useState(mockFriends);
  const [isAddFriend, setIsAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleIsAddFriendTrue() {
    setIsAddFriend(prev => !prev);
  }

  function handleAddFriend(friend) {
    setFriends(prev => [...prev, friend]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend(curr => (curr?.id === friend?.id ? friend : friend));
  }

  function handleDeleteFriend(id) {
    return setFriends(curr => curr.filter(friend => friend.id !== id));
  }

  function handleEditFriend(value) {
    setFriends(curr =>
      curr.map(friend =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: value + friend.balance }
          : friend
      )
    );
  }

  function handleClearAllDebt() {
    setFriends([]);
  }

  return (
    <div className="body-wrapper bg-[whitesmoke]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/friendlist"
          element={
            <FriendsList
              friends={friends}
              isAddFriend={isAddFriend}
              onAddFriend={handleIsAddFriendTrue}
              selectedFriend={selectedFriend}
              onSelectedFriend={handleSelectedFriend}
              onDeleteFriend={handleDeleteFriend}
              onClearAllDebt={handleClearAllDebt}
            />
          }
        />

        <Route
          path="/friendnew"
          element={<FormAddFriend onAddNewFriend={handleAddFriend} />}
        />
        {selectedFriend && (
          <Route
            path="/friendedit/:id"
            element={
              <FriendEdit
                friends={friends}
                selectedFriend={selectedFriend}
                onEditFriend={handleEditFriend}
                key={selectedFriend?.id}
              />
            }
          />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
