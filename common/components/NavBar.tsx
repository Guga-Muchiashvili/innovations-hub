"use client";
import React from "react";
import { NavRoutes } from "../constans";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const route = useRouter();
  const pathName = usePathname();

  return (
    <div className="py-3 rounded-t-2xl pl-10 pr-8 absolute flex gap-36 left-1/2 z-40 bottom-0 bg-white translate-x-[-50%]">
      <div className="w-full flex gap-5 justify-center">
        {NavRoutes.map((item) => (
          <div
            key={item.label}
            className="group flex flex-col w-fit pr-4 duration-500 h-fit gap-3 items-center hover:bg-opacity-10 hover:rounded-full cursor-pointer"
            onClick={() => route.push(`/${item.route}`)}
          >
            <item.icon
              className={`w-14 h-14 bg-[#EFEFEF] rounded-full cursor-pointer p-4 transition-all duration-300
                ${
                  "/" + item.route === pathName
                    ? "text-customPurple"
                    : "text-gray-600 group-hover:bg-[#E4F7FD]"
                }
                `}
            />
            <h1
              className={`text-lg font-semibold transition-all duration-300
                ${
                  "/" + item.route === pathName
                    ? "text-customPurple"
                    : "text-[#616161] group-hover:text-[#4682B4]"
                }
                `}
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
