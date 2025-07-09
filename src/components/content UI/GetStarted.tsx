import React from "react";
import Lottie from "lottie-react";
import animationData1 from "@/assets/animations/saving-animation1.json";

export default function GetStarted() {
  return (
    <div className="text-left md:flex mt-20">
      <div>
        <h4 className="text-5xl font-bold">Get started with these steps</h4>
        <p className="mt-5 text-base md:text-lg">
          To get the most out of Skewer, we carefully simplified the process for
          you to get on board by following these simple steps
        </p>

        <div className="flex mt-10">
          <h4 className="text-xl me-5">01</h4>

          <div className="max-w-md">
            <h4 className="text-xl font-semibold">Register:</h4>
            <p className="text-base mt-3">
              Get set up in a minute by signing up with your name, phone and
              email address.
            </p>
          </div>
        </div>

        <div className="flex mt-10 text-gray-300">
          <h4 className="me-5 text-xl">02</h4>

          <div className="max-w-md">
            <h4 className="text-xl font-semibold">Verify your profile:</h4>
            <p className="text-base mt-3">
              Get your profile verified. No thanks, we usually do this in a few
              seconds.
            </p>
          </div>
        </div>

        <div className="flex mt-10 text-gray-300">
          <h4 className="me-5 text-xl">03</h4>

          <div className="max-w-md">
            <h4 className="text-xl font-semibold">
              Link your financial accounts:
            </h4>
            <p className="text-base mt-3">
              To get the most out of Skewer, linking your financial accounts
              helps us serve you better by making sure you`re always in control
              of your spending.
            </p>
          </div>
        </div>
      </div>

      {/* animation background */}
      <Lottie animationData={animationData1} />
    </div>
  );
}
