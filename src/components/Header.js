import { PiScrollFill } from "react-icons/pi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="p-4 bg-gray-900">
        <ul className="flex justify-start items-center gap-2">
          <NavLink to="/split-bill-frontend">
            <li>
              <PiScrollFill className="text-blue-800" size={40} />
            </li>
          </NavLink>
          <NavLink to="/split-bill-frontend">
            <li className="font-hero relative text-blue-700 font-extrabold">
              Bill Splitter{" "}
              <span>
                <FaMoneyBillAlt className="inline absolute top-0 text-green-700" />
              </span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
