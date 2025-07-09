"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import GetStarted from "@/components/content UI/GetStarted";
import MoreInfo from "@/components/content UI/MoreInfo";

export default function Home() {
  return (
    <>
      <Hero />
      <Content />
      <Footer />
    </>
  );
}

const Content = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-3 mt-28">
      {/* More info section */}
      <MoreInfo />

      {/* To get started */}

      <GetStarted />
    </div>
  );
};
