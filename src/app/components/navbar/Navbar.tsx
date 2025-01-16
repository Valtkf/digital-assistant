import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex flex-wrap justify-between items-center gap-6 text-xl">
      <div className="ml-8 mr-8">
        <button className="flex justify-center items-center text-2xl text-[#5c50f0] font-semibold">
          Virtual
          <div className="text-black hover:text-[#5c50f0]">Assistant</div>
        </button>
      </div>
      <div className="flex justify-center flex-grow gap-8">
        <a href="" className="hover:text-[#5c50f0]">
          Services
        </a>
        <a href="" className="hover:text-[#5c50f0]">
          Pricing
        </a>
        <a href="" className="hover:text-[#5c50f0]">
          FAQ
        </a>
        <a href="" className="hover:text-[#5c50f0]">
          Testimonials
        </a>
        <a href="" className="hover:text-[#5c50f0]">
          Contact
        </a>
      </div>
      <div className="mr-8 flex justify-end flex-grow">
        <button className="border-2 rounded-full text-base text-white bg-[#5c50f0] hover:bg-indigo-600 font-semibold pt-3 pb-3 pr-6 pl-6">
          📅 Schedule a Consultation
        </button>
      </div>
    </div>
  );
}
