import React from "react";

const Discounts = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:h-[310px] md:h-[500px] grid-cols-1 h-[800px]">
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
