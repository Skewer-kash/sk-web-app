import { Content } from "./Content";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="bg-[#0b253c] text-white">
        <Navbar />
        <Hero />
      </div>
      <Content />
    </>
  );
};

export default App;
