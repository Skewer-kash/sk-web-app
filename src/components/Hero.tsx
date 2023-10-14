import { HiArrowDown } from "react-icons/hi";
import Form from "./Form";

export default function Hero() {
  return (
    <div className="bg-[#0b253c] w-full">
      <div className="max-w-[1280px] mx-auto grid grid-row-2 px-3.5 ">
        <div className="flex flex-col lg:flex-row justify-center items-center md:justify-between mt-16 md:mt-32">
          {/* statement */}
          <div className="mt-10 shrink text-center lg:text-left lg:w-1/2 h-34 text-white">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-wide">
              <span className="text-[#FD8D14]">Grow</span> your Finances with{" "}
              <span className="text-[#FD8D14]">SKEWER</span>
            </h1>
            <p className="text-base md:text-xl mt-8 tracking-wide">
              Skewer provides money management so that you can take it easy and
              enjoy life.Skewer simplifies this by allowing you to manage your
              financial accounts, savings and money portfolios right in one app.
            </p>
          </div>

          {/* sign up form */}
          <Form />
        </div>

        {/* scrollable button */}
        <button className="flex justify-center lg:justify-start mt-10 mb-16 md:mt-20 md:mb-24 stroke-1 cursor-pointer ">
          <HiArrowDown className="w-12 h-8 transform transition duration-500 hover:scale-125 text-white" />
        </button>
      </div>
    </div>
  );
}
