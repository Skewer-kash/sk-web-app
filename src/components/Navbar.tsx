import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0b253c] border-b border-b-[#27374D] fixed top-0 z-50  w-full items-center py-2.5 px-2 text-white">
      <div className="flex justify-between w-full max-w-[1280px] mx-auto ">
        <div className="flex gap-16 justify-center items-center ">
          {/* logo */}
          <h1 className="text-3xl font-bold tracking-wider">Skewer</h1>
          {/* links */}
          <ul className="hidden md:flex gap-10">
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale- duration-300">
              About
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale- duration-300">
              Contacts
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale- duration-300">
              <Link href="/FAQs">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* button */}

        <button className="border-[0.1px] border-[#23425c] hover:bg-[#1fc1c3] rounded-md px-5 py-[0.8rem] mr-2 text-base transform transition duration-500 hover:scale-90">
          Join Early
        </button>
      </div>
    </nav>
  );
}
