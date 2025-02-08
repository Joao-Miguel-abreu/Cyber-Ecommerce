import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="bg-[#0d0f1a] text-purple-500">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00e5ff] font-bold text-shadow-md">
          THE AGE OF CHROME AND CIRCUITS HAS ARRIVED.
        </p>
        {/* md: = Anything above medium */}
        <h1 className="text-[#ffffff] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          UPGRADE. EVOLVE. TRANSCEND.
        </h1>

        <p className="text-[#b0b0b0] md:text-5xl sm:text-4xl text-xl font-bold py-4">
          In the year 2100, your body is your most valuable asset.
        </p>
        <ReactTyped
          className="text-[#00e5ff] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 mb-4"
          strings={["NEURAL IMPLANTS", "CYBER ORGANS", "SYNTHETIC REALITY"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />

        <p className="text-[#ffffff] md:text-2xl text-xl font-bold">
          Humanity has evolved. Flesh is obsolete. It’s time to upgrade.
        </p>
        <button className="bg-[#00e5ff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#0d0f1a]">
          INSTALL FUTURE
        </button>
      </div>
    </div>
  );
};

export default Hero;
