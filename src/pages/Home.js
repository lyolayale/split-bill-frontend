export default function Home() {
  return (
    <section className="mt-52 h-screen max-w-lg mx-auto flex flex-col justify-start items-center gap-5 p-5">
      <h1 className="text-4xl leading-normal">
        Who needs good karma,{" "}
        <span className="text-blue-800">when you can have awkard stares?</span>
      </h1>
      <div className="text">
        <p className="text-gray-600 text-xl">
          Split the bill! Oversee your financial friendship.
        </p>
      </div>
      <button className="mt-10 uppercase w-[10rem] p-2 rounded-lg bg-blue-800 text-white shadow-md shadow-gray-500 hover:shadow-none duration-200">
        Get Started
      </button>
    </section>
  );
}
