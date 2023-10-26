/* eslint-disable @next/next/no-img-element */

import Collaboration from "./components/Collaboration/Collaboration";
import Globe from "./components/Footer/Globe";
import Hero from "./components/Hero Section/Hero";
import Navbar from "./components/Navbar/Navbar";
import StickyNav from "./components/Navbar/StickyNav";
import Productivity from "./components/Productivity/Productivity";
import Security from "./components/Security/Security";
import Footer from "./components/Footer/Footer";

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

          <StickyNav />

          <div className="px-4 pt-8 overflow-hidden mb-30" id="productivity">
            <Productivity />
          </div>

          <div className="px-4 pt-8 overflow-hidden" id="collaboration">
            <Collaboration />
          </div>

          <div id="security" className="px-4 pt-8 pb-16 overflow-hidden">
            <Security />
          </div>

          <Globe />

          <div className="max-w-[1280px] mx-auto relative z-[2]  px-5">
            <ul className="lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1">
              <li>
                <sup id="footnote-1">1</sup> The Total Economic Impact™ Of
                GitHub Enterprise Cloud and Advanced Security, a commissioned
                study conducted by Forrester Consulting, 2022. Results are for a
                composite organization based on interviewed customers.
              </li>
              <li>
                <sup id="footnote-2">2</sup> GitHub, Octoverse 2022 The state of
                open source software.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
