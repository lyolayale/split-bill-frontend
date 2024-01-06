import { ClearAllDebt } from ".";

export default function onClearAllDebt({
  onClearAllDebt,
  handleClearAllDebtFalse,
}) {
  return (
    <section className="absolute text-black bg-white top-52 left-5 w-[95%] max-w-screen-lg h-[30%] rounded shadow-2xl shadow-black z-10 flex flex-col justify-start items-left gap-5 p-10">
      <h2 className="text-3xl font-bold">Clear All Debt?</h2>
      <p className="text-lg">
        By clicking the clear all debt button below, will permanently delete all
        debt!
      </p>
      <div className="buttons mt-[5%] flex justify-end items-center gap-5">
        <button
          onClick={handleClearAllDebtFalse}
          className="block text-black border-2 border-black text-2xl pt-1 pb-2 px-4 rounded-sm cursor-pointer shadow-lg duration-200"
        >
          Not now
        </button>
        <button
          className="bg-red-700 text-white text-2xl pt-1 pb-2 px-4 rounded-sm cursor-pointer shadow-lg duration-200"
          onClick={() => onClearAllDebt()}
        >
          Clear All Debt
        </button>
      </div>
    </section>
  );
}
