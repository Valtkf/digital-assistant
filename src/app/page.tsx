"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col justify-center items-center sm:items-start pt-10 gap-20">
        <Navbar />
        <div className="flex justify-center items-center max-xl:flex-col text-6xl font-regular w-full h-auto gap-10">
          <div className="flex flex-col justify-start items-start w-2/6 max-xl:w-full max-xl:items-center gap-y-2 p-2">
            <h1>Top-Tier Virtual</h1>
            <h1 className="text-[#5c50f0] font-regular">Assistant Services</h1>
            <h1>Tailored for You</h1>
            <div className="flex flex-col justify-center items-center mt-10">
              <p className="text-2xl text-gray-600">
                Enhance Your Productivity to the Max with
              </p>
              <p className="text-2xl text-gray-600">
                Personalized Support and Guidance
              </p>
            </div>
            <div className="flex justify-center flex-grow mt-10 gap-6">
              <button className="border-2 rounded-full text-xl text-white bg-[#5c50f0] hover:bg-indigo-600 font-semibold pt-3 pb-3 pr-6 pl-6">
                📅 Schedule a Consultation
              </button>
              <button className="text-lg font-regular hover:text-[#5c50f0] underline underline-offset-[10px] ">
                See Pricing
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center w-2/6 h-auto">
            <Image
              src="/images/vituelassistant.avif"
              width={800}
              height={800}
              alt="Picture of a virtual assistant"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
