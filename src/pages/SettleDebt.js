export default function SettleDebt({
  selectedFriend,
  handleDeleteFriend,
  handleDebtFalse,
  currentFriend,
}) {
  return (
    <section className="absolute text-black bg-white top-52 left-5 w-[95%] h-auto max-w-screen-lg rounded shadow-2xl shadow-black z-10 flex flex-col justify-start items-left gap-5 p-10">
      <h2 className="text-3xl font-bold">
        Settle Debt with {selectedFriend?.name}?
      </h2>
      <p className="text-lg">
        By clicking the settle debt button below, will permanently delete
        transaction:{" "}
        <span className="text-blue-800 font-bold">
          {" "}
          {selectedFriend?.event}
        </span>{" "}
        with{" "}
        <span className="text-blue-800 font-bold">{selectedFriend?.name}</span>.
      </p>
      <div className="buttons mt-[5%] flex justify-end items-center gap-5">
        <button
          onClick={handleDebtFalse}
          className="block text-black border-2 border-black text-2xl pt-1 pb-2 px-4 rounded-sm cursor-pointer shadow-lg duration-200"
        >
          Not now
        </button>
        <button
          className="bg-red-700 text-white text-2xl pt-1 pb-2 px-4 rounded-sm cursor-pointer shadow-lg duration-200"
          onClick={() => handleDeleteFriend(currentFriend?.id)}
        >
          Settle Debt
        </button>
      </div>
    </section>
  );
}
