import React from "react";

function Newsletter() {
  return (
    <div className="bg-[#0d0f1a] w-full py-16 text-black px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Subscribe for the Latest Updates
          </h1>
          <p className="text-gray-300">
            Stay on top of all cybernetic updates in the world of 2100.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="appearance-none border-2 border-white p-3 flex w-full rounded-xl  text-white"
              type="email"
              placeholder="Enter Email"
            ></input>
            <button className="bg-[#222222] text-white hover:bg-[#333333] rounded-md font-medium w-[200px] ml-4 my-6 py-3">
              NOTIFY ME
            </button>
          </div>
          <p className="text-[#b0b0b0]">
            Change your body, change your mind. Don’t miss out on being part of
            tomorrow.
            <span className="text-[#ebebeb]"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
