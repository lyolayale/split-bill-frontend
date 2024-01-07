export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full">
      <nav className="p-4 bg-gray-950 font-light text-xs">
        <ul className="flex justify-center items-center gap-2 text-blue-700">
          <li>
            <p>&copy;Bill Splitter</p>
          </li>
          <li className="font-hero text-green-700">
            <p>{new Date().getFullYear()}</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
