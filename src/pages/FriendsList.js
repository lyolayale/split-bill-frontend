import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuClipboardSignature } from "react-icons/lu";
import SettleDebt from "./SettleDebt";
import Friend from "./Friend";

export default function FriendsList({
  friends,
  onAddFriend,
  onRemoveFriend,
  selectedFriend,
  onSelectedFriend,
  onDeleteFriend,
}) {
  const [settleDebt, setSettleDebt] = useState(false);
  const currentFriend = friends?.find(
    friend => friend?.id === selectedFriend?.id
  );

  const navigate = useNavigate();

  function handleDebtTrue() {
    setSettleDebt(true);
  }
  function handleDebtFalse() {
    setSettleDebt(false);
  }

  function handleDeleteFriend(friend) {
    onDeleteFriend(friend);
    setSettleDebt(false);
  }
  return (
    <section className="relative h-screen max-w-screen-lg mx-auto">
      <nav className="m-3 p-5 bg-slate-200 rounded-md z-0">
        <ul className="flex justify-between items-center">
          <li>
            <p className="inline text-black text-3xl font-bold">
              Activity Board{" "}
              <LuClipboardSignature className="inline text-blue-800" />
            </p>
          </li>
          <li>
            <div
              onClick={onAddFriend}
              className="flex justify-center items-center gap-10"
            >
              <NavLink to="/friendnew">
                <p className="text-gray-200 text-4xl bg-gray-600 pt-1 pb-2 px-4 rounded-full cursor-pointer shadow-lg shadow-slate-500 hover:shadow-none duration-200 hover:text-black hover:border hover:border-1 hover:border-gray-600">
                  +
                </p>
              </NavLink>

              <NavLink to="/">
                <p
                  onClick={onRemoveFriend}
                  className="text-gray-200 text-2xl bg-red-800 pt-1 pb-2 px-4 rounded-full cursor-pointer shadow-lg shadow-slate-500 hover:shadow-none hover:text-black hover:border hover:border-1 hover:border-gray-600 duration-200"
                >
                  Exit
                </p>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>

      <ul className="my-20 flex flex-col justify-center items-center gap-10">
        {friends?.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            onSelectedFriend={onSelectedFriend}
            handleDebtTrue={handleDebtTrue}
          />
        ))}
      </ul>
      {settleDebt && selectedFriend ? (
        <SettleDebt
          selectedFriend={selectedFriend}
          handleDeleteFriend={handleDeleteFriend}
          handleDebtFalse={handleDebtFalse}
          currentFriend={currentFriend}
        />
      ) : (
        ""
      )}
    </section>
  );
}
