import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
export default function FormAddFriend({ onAddNewFriend }) {
  const [transaction, setTransaction] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [userAmount, setUserAmount] = useState("");
  const [whoPaid, setWhoPaid] = useState("");
  const friendsAmount = amount ? amount - userAmount : "";
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!transaction || !name || !amount || !userAmount || !whoPaid) return;

    const newFriend = {
      id: crypto.randomUUID(),
      name,
      event: transaction,
      balance: whoPaid === "user" ? friendsAmount : -userAmount,
    };
    onAddNewFriend(newFriend);
    navigate("/friendlist");
  }
  return (
    <section className="h-screen w-[95%] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="mt-20 min-h-[500px] min-w-[65%] max-w-screen-lg mx-auto text-gray-600 bg-white shadow-2xl shadow-black rounded-lg flex flex-col justify-start items-start gap-5 p-10"
      >
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl">Create new Transaction</h2>
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
          <input
            title="transaction"
            onChange={e => setTransaction(e.target.value)}
            value={transaction}
            className="p-2 border border-gray-300 border-1 rounded-md hover:shadow-md hover:shadow-gray-500 w-full focus:outline-none focus:scale-105 focus:shadow-md focus:shadow-gray-500"
            type="text"
            placeholder="Uber Hotel Dinner"
            required
          />
        </div>

        <div className="w-full">
          <label className="underline text-lg">
            Friend's Name <span className="text-red-700">*</span>
          </label>
          <input
            title="name"
            onChange={e => setName(e.target.value)}
            value={name}
            className="p-2 border border-gray-300 border-1 rounded-md hover:shadow-md hover:shadow-gray-500 w-full focus:outline-none focus:scale-105 focus:shadow-md focus:shadow-gray-500"
            type="text"
            placeholder="Mary Jones"
            required
          />
        </div>

        <div className="w-full">
          <label className="underline text-lg">
            Amount <span className="text-red-700">*</span>
          </label>
          <input
            title="amount"
            onChange={e => setAmount(Number(e.target.value))}
            value={amount}
            className="p-2 border border-gray-300 border-1 rounded-md hover:shadow-md hover:shadow-gray-500 w-full focus:outline-none focus:scale-105 focus:shadow-md focus:shadow-gray-500"
            type="number"
            placeholder="$500"
            min={1}
            required
          />
        </div>

        <div className="w-full">
          <label className="underline text-lg">
            Your Half <span className="text-red-700">*</span>
          </label>
          <input
            title="your half"
            onChange={e =>
              setUserAmount(
                Number(e.target.value) > amount
                  ? amount
                  : Number(e.target.value)
              )
            }
            value={userAmount}
            className="p-2 border border-gray-300 border-1 rounded-md hover:shadow-md hover:shadow-gray-500 w-full focus:outline-none focus:scale-105 focus:shadow-md focus:shadow-gray-500"
            type="number"
            placeholder="250"
            required
          />
        </div>

        <div className="w-full">
          <label className="underline text-lg">
            Friend's Half <span className="text-red-700">*</span>
          </label>
          <input
            title="friends half"
            value={friendsAmount}
            className="p-2 border border-gray-300 border-1 rounded-md hover:shadow-md hover:shadow-gray-500 w-full focus:outline-none focus:scale-105 focus:shadow-md focus:shadow-gray-500"
            type="number"
            placeholder="250"
            disabled
          />
        </div>

        <div className="w-full">
          <label className="underline text-lg">
            Paid by <span className="text-red-700">*</span>
          </label>
          <select
            title="paid by"
            onChange={e => setWhoPaid(e.target.value)}
            value={whoPaid}
            className="p-2 border border-gray-300 border-1 rounded-md hover:shadow-md hover:shadow-gray-500 w-full focus:outline-none focus:scale-105 focus:shadow-md focus:shadow-gray-500"
            required
          >
            <option value="">Select</option>
            <option value="user">You</option>
            <option value="friend">{name}</option>
          </select>
        </div>

        <button className="ml-auto px-2 py-3 bg-gray-600 text-white uppercase rounded-lg hover:scale-105 duration-200">
          record new transaction
        </button>
      </form>
    </section>
  );
}
