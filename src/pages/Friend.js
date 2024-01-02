import { useNavigate } from "react-router-dom";
import { FaRegHandshake } from "react-icons/fa";

export default function Friend({
  friend,
  selectedFriend,
  onSelectedFriend,
  handleDebtTrue,
}) {
  // const currentFriend = friend.id === selectedFriend?.id;
  const navigate = useNavigate();

  function handleClick(friend) {
    onSelectedFriend(friend);
    navigate(`/friendedit/${selectedFriend?.id}`);
  }

  function handleDebt(friend) {
    onSelectedFriend(friend);
    handleDebtTrue();
  }

  return (
    <section
      title="friend"
      className="w-[75%] min-w-[20rem] rounded-md max-w-screen-lg p-6 bg-gray-200  shadow-lg shadow-gray-500 hover:shadow-none hover:border hover:border-1 hover:border-gray-600 duration-200 flex justify-between items-center"
    >
      <div className="left-side flex flex-col justify-center items-start w-40">
        <p
          onClick={() => handleClick(friend)}
          className="text-blue-800 font-bold underline uppercase cursor-pointer hover:opacity-60 duration-200"
        >
          {friend?.event}
        </p>
        <p>{friend?.name}</p>
      </div>
      <button
        onClick={() => handleDebt(friend)}
        className="flex flex-col justify-center items-center p-2 rounded-md hover:border hover:border-1 hover:border-red-800 hover:text-red-800 hover:shadow-md hover:shadow-gray-800 focus:shadow-none duration-200 w-40"
      >
        Settle Debt
        <FaRegHandshake size={30} />
      </button>

      <div className="right-side w-40 text-right">
        {friend?.balance > 0 && (
          <>
            <p className="underline">Owes you:</p>
            <p className="text-green-700">${friend?.balance}</p>
          </>
        )}
        {friend?.balance < 0 && (
          <>
            <p className="underline">You owe:</p>
            <p className="text-red-700">${friend?.balance}</p>
          </>
        )}
        {friend?.balance === 0 && (
          <>
            <p className="underline">Are even:</p>
            <p className="text-black">${friend?.balance}</p>
          </>
        )}
      </div>
    </section>
  );
}
