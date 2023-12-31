import { PiScrollFill } from "react-icons/pi";
import { FaMoneyBillAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <nav className="p-4 bg-gray-300">
        <ul className="flex justify-start items-center gap-2">
          <li>
            <PiScrollFill className="text-blue-800" size={40} />
          </li>
          <li className="font-hero relative">
            Bill Splitter{" "}
            <span>
              <FaMoneyBillAlt className="inline absolute top-0 text-green-800" />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
