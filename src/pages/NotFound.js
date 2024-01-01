import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className=" h-screen w-max-screen-lg bg-slate-900 flex flex-col justify-center items-center gap-20">
      <div className="relative p-tags mx-auto flex flex-column justify-center items-center">
        <p className="mt-[-10rem] text-9xl font-extrabold text-stone-300">
          404
        </p>
        <p className="absolute bg-orange-600 w-36 text-center uppercase bottom-[70px] rotate-12 text-sm">
          page not found
        </p>
      </div>
      <NavLink to="/">
        <button className="w-36 p-2 text-orange-600 uppercase bg-transparent border border-orange-600 shadow-lg shadow-orange-600 hover:shadow-none duration-200">
          Go Home
        </button>
      </NavLink>
    </section>
  );
}
