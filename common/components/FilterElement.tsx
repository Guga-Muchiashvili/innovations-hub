import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const FilterElement = () => {
  return (
    <div className="w-full flex items-center text-lg gap-7 h-28 justify-between">
      <div className="flex items-center gap-7">
        <h1 className="flex items-center gap-2 cursor-pointer">
          ქვეყანა <IoIosArrowDown />
        </h1>
        <h1 className="flex items-center gap-2 cursor-pointer">
          ასაკი <IoIosArrowDown />
        </h1>
        <h1 className="flex items-center gap-2 cursor-pointer">
          ორგანიზაცია <IoIosArrowDown />
        </h1>
        <h1 className="flex items-center gap-2 cursor-pointer">
          ბიუჯეტი <IoIosArrowDown />
        </h1>
        <h1 className="flex items-center gap-2 cursor-pointer">
          თარიღი <IoIosArrowDown />
        </h1>
      </div>
      <div className="relative">
        <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        <input
          type="text"
          className="bg-[#F4FCFF] border-[#E9E9E9] border-[1px] outline-none rounded-xl pl-12 pr-4 w-80 h-12 text-gray-600 placeholder-gray-400"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default FilterElement;
