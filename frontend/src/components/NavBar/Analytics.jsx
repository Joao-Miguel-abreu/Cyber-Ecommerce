import React from "react";
import image1 from "/src/assets/image1.jpg";

function Analytics() {
  return (
    <div className="w-full bg-gray-800 py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[300px] mx-auto my-4" src={image1} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-white font-bold">SpectraGen™</p>
          <h1 className="text-[#b0b0b0] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Enhancing Humanity Since 2084.
          </h1>
          <p className="text-gray-400">
            Your body is outdated. Your mind is slow. Upgrade now with Zenith
            Augmentations™ and stay ahead in the modern world.
            <br />
            <br />
            🤖 Cybernetic limbs* for peak performance. <br />
            ⚡ Neural implants* for instant knowledge. <br />
            👁 Synthetic eyes* for enhanced vision. <br />
          </p>
          <button className="bg-[#222222] text-white hover:bg-[#333333] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 ">
            INSTALL UPGRADE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
