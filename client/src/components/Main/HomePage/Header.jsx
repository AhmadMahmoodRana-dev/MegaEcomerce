import Navbar from "@/components/Main/HomePage/Navbar";
import React from "react";

const Header = () => {
  return (
    <div className="header w-full h-screen">
      <Navbar />
      <header className="w-full h-[89vh] flex flex-col justify-center px-8">
        <h3 className="text-[#79664e] lg:text-2xl md:text-xl tracking-widest text-lg">
          LET'S BE SMARTER
        </h3>
        <h1 className="text-white xl:text-7xl lg:text-6xl font-bold xl:leading-[6rem] lg:leading-[5rem] md:text-5xl md:leading-[4rem] text-3xl">
          Enjoy your daily <br />
          life Smart way ...
        </h1>
        <p className="text-white xl:text-xl lg:text-lg tracking-wider mt-3 md:text-[1rem] text-[1rem]">
          Smartwatches provide quick access to notifications,calls,messages and{" "}
          <br /> apps right on your wrist, reducing the constantly check your
          phone.
        </p>
        <div className="button-container pt-10 relative">
          <button className="bg-white px-5 py-2 rounded-[40px] font-medium absolute left-[rem] transition-all duration-500 ease-in-out hover:translate-y-[-10px] sm:text-md text-sm">
            Pre-Order
          </button>
          <button className="bg-transparent border text-white px-5 py-2 rounded-[40px] font-medium absolute left-[9rem] transition-all duration-500 ease-in-out hover:translate-y-[-10px] hover:bg-white hover:text-black sm:text-md text-sm">
            View More
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
