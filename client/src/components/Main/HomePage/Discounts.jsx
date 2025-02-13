import React from "react";

const Discounts = () => {
  return (
    <div className="grid grid-cols-3 mb-10 h-[310px]">
      <div className="overflow-hidden relative bg-black">
        <div className="w-full h-full banner-img overflow-hidden absolute opacity-[.9]"></div>
      </div>
      <div className="overflow-hidden">
        <div className="w-full h-full banner-img-2 overflow-hidden"></div>
      </div>
      <div className="overflow-hidden">
        <div className="w-full h-full banner-img-3 overflow-hidden"></div>
      </div>
      {/* Discounts */}
    </div>
  );
};

export default Discounts;
