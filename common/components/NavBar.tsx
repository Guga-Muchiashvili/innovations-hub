"use client";
import React from "react";
import { NavRoutes } from "../constans";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const route = useRouter();
  const pathName = usePathname();

  return (
    <div className="py-3 rounded-t-2xl w-full z-50 md:pl-10 md:pr-8 md:w-fit md:left-1/2 md:translate-x-[-50%] fixed bottom-0 left-0 bg-white shadow-md md:flex md:justify-center md:gap-8">
      <div className="flex justify-center w-full gap-4 md:gap-10">
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
  );
};

export default NavBar;
