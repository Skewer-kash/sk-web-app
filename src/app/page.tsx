"use client";

import Hero from "@/components/Hero";
import GetStarted from "@/components/content UI/GetStarted";
import MoreInfo from "@/components/content UI/MoreInfo";

export default function Home() {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
}

const Content = () => {
  return (
    <div className="w-full">
      {/* More info section */}
      <MoreInfo />

      {/* To get started */}

      <GetStarted />
    </div>
  );
};
