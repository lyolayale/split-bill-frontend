import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
export default function FriendEdit({ friends, selectedFriend, onEditFriend }) {
  const [amount, setAmount] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const currentFriend = friends?.find(friend => friend.id === +id);

  function handleSubmit(e) {
    e.preventDefault();
    onEditFriend(amount);
    navigate("/friendlist");
  }

  return (
    <section className="h-screen w-[95%] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="mt-20 min-h-[500px] min-w-[65%] max-w-screen-lg mx-auto text-gray-600 bg-white shadow-2xl shadow-black rounded-lg flex flex-col justify-start items-start gap-5 p-10"
      >
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl">
            Edit {selectedFriend?.event} with{" "}
            <span className="text-black">{selectedFriend?.name}</span>{" "}
          </h2>
          <NavLink to="/friendlist">
            <p className="inline px-3 py-2 text-gray-200 text-xl bg-gray-600 rounded-full cursor-pointer shadow-lg shadow-slate-500 hover:shadow-none duration-200 hover:text-black">
              X
            </p>
          </NavLink>
        </div>
        <div className="w-full">
          <label className="underline text-lg">
            Transaction Name <span className="text-red-700">*</span>
          </label>
          {/* <input
            onChange={e => setTransaction(e.target.value)}
            value={transaction}
            className="p-2 border border-gray-300 border-1 rounded-md hover:shadow-md hover:shadow-gray-500 w-full focus:outline-none focus:scale-105 focus:shadow-md focus:shadow-gray-500"
            type="text"
            placeholder={selectedFriend?.event}
          /> */}
          <p className="text-lg text-black">{selectedFriend?.event}</p>
        </div>

        <div className="w-full">
          <label className="underline text-lg">
            Friend's Name <span className="text-red-700">*</span>
          </label>
          {/* <input
            onChange={e => setName(e.target.value)}
            value={name}
            className="p-2 border border-gray-300 border-1 rounded-md hover:shadow-md hover:shadow-gray-500 w-full focus:outline-none focus:scale-105 focus:shadow-md focus:shadow-gray-500"
            type="text"
            placeholder={selectedFriend?.name}
          /> */}
          <p className="text-lg text-black">{selectedFriend?.name}</p>
        </div>

        <div className="w-full">
          <label className="underline text-lg">
            Adjust Amount <span className="text-red-700">*</span>
          </label>
          <input
            onChange={e => setAmount(Number(e.target.value))}
            value={amount}
            className="block text-lg text-black p-2 border border-gray-300 border-1 rounded-md hover:shadow-md hover:shadow-gray-500 w-20 focus:outline-none focus:scale-105 focus:shadow-md focus:shadow-gray-500"
            type="number"
            placeholder={`$${selectedFriend?.balance}`}
          />
        </div>
        <label className="underline text-lg">
          New Balance <span className="text-red-700">*</span>
        </label>
        <p className="text-lg text-black p-2 border border-gray-300 border-1 rounded-md hover:shadow-md hover:shadow-gray-500 w-20 focus:outline-none focus:scale-105 focus:shadow-md focus:shadow-gray-500">
          {selectedFriend?.balance + amount}
        </p>

        <button className="ml-auto px-2 py-3 bg-gray-600 text-white uppercase rounded-lg hover:scale-105  duration-200">
          edit transaction
        </button>
      </form>
    </section>
  );
}
