import React from "react";

const CategorySection = () => {
  return (
    <div className="w-full h-screen pt-36">
      <h1 className="text-black font-bold md:text-6xl text-3xl text-center">
        Choose your Category
      </h1>
      <p className="text-gray-700 text-center md:text-xl mt-5 text-md tracking-wider">
        Smartwatches provide quick access to notifications, calls, messages, and{" "}
        <br />
        apps right on your wrist, reducing the constantly check your phone.
      </p>

      {/* CATEGORY CONTAINER */}

      <div className="category_container gap-8 px-16 flex justify-center mt-14 flex-wrap">
        {/* FIRST */}
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="rounded-full w-[250px] h-[250px] overflow-hidden">
            <div className="w-full h-full card-1"></div>
          </div>
          <h1 className="text-2xl font-bold mt-5">Home Appliances</h1>
          <p className="text-gray-700 text-lg mt-3">1 Items</p>
        </div>
        {/* SECOND */}
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="rounded-full w-[250px] h-[250px] overflow-hidden">
            <div className="w-full h-full card-2"></div>
          </div>
          <h1 className="text-2xl font-bold mt-5">PC & Laptop</h1>
          <p className="text-gray-700 text-lg mt-3">6 Items</p>
        </div>
        {/* THIRD */}
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="rounded-full w-[250px] h-[250px] overflow-hidden">
            <div className="w-full h-full card-3"></div>
          </div>
          <h1 className="text-2xl font-bold mt-5">Kitchen Appliances</h1>
          <p className="text-gray-700 text-lg mt-3">10 Items</p>
        </div>
        {/* FOURTH */}
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="rounded-full w-[250px] h-[250px] overflow-hidden">
            <div className="w-full h-full card-4"></div>
          </div>
          <h1 className="text-2xl font-bold mt-5">Phone & Tablet</h1>
          <p className="text-gray-700 text-lg mt-3">11 Items</p>
        </div>
        {/* FIFTH */}
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="rounded-full w-[250px] h-[250px] overflow-hidden">
            <div className="w-full h-full card-5"></div>
          </div>
          <h1 className="text-2xl font-bold mt-5">Accessories</h1>
          <p className="text-gray-700 text-lg mt-3">6 Items</p>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
