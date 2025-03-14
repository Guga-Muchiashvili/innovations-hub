"use client";
import React, { useState } from "react";
import { NavRoutes } from "../constans";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";

const NavBar = () => {
  const route = useRouter();
  const pathName = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);

  return showNavbar ? (
    <div className="py-3 rounded-t-2xl w-full z-50 md:pl-8 md:pr-8 md:w-fit md:left-1/2 md:translate-x-[-50%] fixed bottom-0 left-0 bg-white shadow-md md:flex md:justify-center md:gap-8">
      <div className="absolute left-1/2 translate-x-[-50%] top-0 flex items-center justify-center w-10 h-7 bg-[#616161] rounded-b-full">
        <IoIosArrowDropdownCircle
          className=" text-white text-2xl cursor-pointer"
          onClick={() => setShowNavbar(false)}
        />
      </div>
      <div className="flex justify-center w-full gap-4 md:gap-10 cursor-pointer ">
        {NavRoutes.map((item) => (
          <div
            key={item.label}
            className="group flex flex-col items-center gap-3 cursor-pointer w-fit duration-500 hover:bg-opacity-10 rounded-full"
            onClick={() => route.push(`/${item.route}`)}
          >
            <item.icon
              className={`w-12 h-12 md:w-14 md:h-14 bg-[#EFEFEF] rounded-full p-2 md:p-4 transition-all duration-300
                ${
                  "/" + item.route === pathName
                    ? "text-customPurple"
                    : "text-gray-600 group-hover:bg-[#E4F7FD]"
                }`}
            />
            <h1
              className={`text-[12px] md:text-lg font-semibold transition-all duration-300
                ${
                  "/" + item.route === pathName
                    ? "text-customPurple text-[12px]"
                    : "text-[#616161] group-hover:text-[#4682B4] text-[12px]"
                }`}
            >
              {item.label}
            </h1>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <RiArrowUpSLine
      onClick={() => setShowNavbar(true)}
      className="fixed z-40 bottom-2 left-1/2 translate-x-[-50%] text-3xl cursor-pointer bg-slate-600 rounded-full text-white"
    />
  );
};

export default NavBar;
