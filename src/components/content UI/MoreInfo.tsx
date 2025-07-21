import React from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/saving-animation.json";
import Card from "../Card";

export default function MoreInfo() {
  return (
    <>
      <div className="max-w-[1280px] px-5 md:px-0 md:mx-auto ">
      <div className="md:flex items-center justify-between mb-20">
        {/* animation background */}
        <Lottie animationData={animationData} />

        <div>
          <h2 className="text-5xl font-bold mb-5">
            Do <span className="text-gold-finance">everything</span> right in one{" "}
            <span className="text-gold-finance">app</span>
          </h2>
          <p className="text-base md:text-lg mb-5">
            Managing your financial accounts on different platforms is HARD. We
            make it easy for you by bringing your finances to one place helping
            you transact, understand how you spend and gain control of your
            finances with ease.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 mb-20">
        <Card />
      </div>
      </div>
    </>
  );
}
