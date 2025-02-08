import React from "react";
import image1 from "/src/assets/image1.jpg";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-gray-800">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* CARD ONE  */}
        <div className="bg-[#1a1a1a] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={image1}
            alt="/"
          />
          <h2 className=" text-[#00df9a] text-2xl font-bold text-center py-8">
            Neural Implant
          </h2>
          <p className="text-[#ebebeb] text-center text-4xl font-bold">€149</p>
          <div className="text-center font-medium">
            <p className="text-[#ebebeb] py-2 border-b m-8 mt-8">
              Enhance your mind
            </p>
            <p className="text-[#ebebeb] py-2 border-b m-8">
              Brain-computer interface
            </p>
            <p className="text-[#ebebeb] py-2 border-b m-8">
              Direct data transfer
            </p>
          </div>
          <button className="bg-[#00df9a] text-white w-[200px] rounded-md font-medium self-center my-6 mx-auto md:mx-0 px-6 py-3">
            GET THE UPGRADE
          </button>
        </div>
        {/* CARD TWO  */}
        <div className="bg-[#2b2b2b] w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={image1}
            alt="/"
          />
          <h2 className="text-[#00df9a] text-2xl font-bold text-center py-8">
            Arm Augmentation
          </h2>
          <p className="text-[#ebebeb] text-center text-4xl font-bold">€299</p>
          <div className="text-center font-medium">
            <p className="text-[#ebebeb] py-2 border-b m-8 mt-8">
              Upgrade your functionality
            </p>
            <p className="text-[#ebebeb] py-2 border-b m-8">
              Enhanced strength
            </p>
            <p className="text-[#ebebeb] py-2 border-b m-8">
              Advanced limb control
            </p>
          </div>
          <button className="bg-[#1c1c1c] text-white w-[200px] rounded-md self-center font-medium my-6 mx-auto md:mx-0 px-6 py-3">
            GET STRONG
          </button>
        </div>
        {/* CARD THREE  */}
        <div className="bg-[#1a1a1a] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={image1}
            alt="/"
          />
          <h2 className="text-[#00df9a] text-2xl font-bold text-center py-8">
            Eye Implant
          </h2>
          <p className="text-[#ebebeb] text-center text-4xl font-bold">€499</p>
          <div className="text-center font-medium">
            <p className="text-[#ebebeb] py-2 border-b m-8 mt-8">
              See the future
            </p>
            <p className="text-[#ebebeb] py-2 border-b m-8">Night vision</p>
            <p className="text-[#ebebeb] py-2 border-b m-8">AR displays</p>
          </div>
          <button className="bg-[#00df9a] text-white w-[200px] rounded-md self-center font-medium my-6 mx-auto md:mx-0 px-6 py-3">
            START NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
