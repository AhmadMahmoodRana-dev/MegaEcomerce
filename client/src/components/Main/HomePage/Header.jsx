import Navbar from "@/components/Main/HomePage/Navbar";
import React from "react";

const Header = () => {
  return (
    <div className="header w-full h-screen">
      <Navbar />
      <header className="w-full h-[89vh] flex flex-col justify-center px-8">
        <h3 className="text-[#79664e] text-2xl tracking-widest">
          LET'S BE SMARTER
        </h3>
        <h1 className="text-white text-7xl font-bold leading-[6rem]">
          Enjoy your daily <br />
          life Smart way ...
        </h1>
        <p className="text-white text-xl tracking-wider mt-3">
          Smartwatches provide quick access to notifications,calls,messages and{" "}
          <br /> apps right on your wrist, reducing the constantly check your
          phone.
        </p>
        <div className="button-container pt-10 relative">
          <button className="bg-white px-5 py-2 rounded-[40px] font-medium absolute left-[rem] transition-all duration-500 ease-in-out hover:translate-y-[-10px]">
            Pre-Order
          </button>
          <button className="bg-transparent border text-white px-5 py-2 rounded-[40px] font-medium absolute left-[9rem] transition-all duration-500 ease-in-out hover:translate-y-[-10px] hover:bg-white hover:text-black">
            View More
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
