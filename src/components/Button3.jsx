import React from "react";

const DrawOutlineButton = ({ children, color = "#9046CF", ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-4 font-medium transition-all duration-300 hover:shadow-md"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#2E2836] transition-all duration-300 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#2E2836] transition-all duration-300 delay-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#2E2836] transition-all duration-300 delay-200 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#2E2836] transition-all duration-300 delay-300 group-hover:h-full" />
    </button>
  );
};

const Start = () => {
  return (
    <div className="hover:bg-opacity-60 hover:bg-blur-md hover:bg-gray-800 w-[140px]  hover:text-white border-2">
    <div className="hover:bg-opacity-20  rounded-lg hover:shadow-lg hover:backdrop-blur-lg hover:bg-white hover:backdrop-filter  ">
      <DrawOutlineButton color="#3B82F6">GET STARTED</DrawOutlineButton>
    </div>
    </div>
  );
};

export default Start;
