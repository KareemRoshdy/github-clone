/* eslint-disable @next/next/no-img-element */

import Hero from "./components/Hero Section/Hero";
import Navbar from "./components/Navbar/Navbar";
import Productivity from "./components/Productivity/Productivity";

const Home = () => {
  return (
    <div>
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>

      <div>
        <div className="overflow-hidden">
          <div className="relative">
            <img
              className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] image"
              src="./hero-bg.webp"
              width="4377"
              alt="image"
            />
          </div>

          <div className="Hero-section px-3">
            <Hero />
          </div>

          <div className="px-4 pt-8 overflow-hidden mb-32" id="productivity">
            <Productivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
