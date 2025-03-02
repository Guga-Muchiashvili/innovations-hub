"use client";
import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { NavRoutes } from "../constans";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const route = useRouter();
  const pathName = usePathname();

  return (
    <div className="py-9 pl-10 pr-8 border-r-[1px] h-screen border-gray-500 hidden xl:flex flex-col gap-36">
      <div className="w-full flex items-center gap-8">
        <Image alt="logo" src={logo.src} width={37} height={55} />
        <h1 className="font-extrabold text-xl text-[#2A296F]">
          Innovators hub
        </h1>
      </div>
      <div className="w-full flex flex-col gap-5">
        {NavRoutes.map((item) => (
          <div
            key={item.label}
            className="group flex w-fit pr-4 duration-500 h-fit gap-7 items-center hover:bg-opacity-10 hover:rounded-full cursor-pointer"
            onClick={() => route.push(`/${item.route}`)}
          >
            <item.icon
              className={`w-14 h-14 bg-[#EFEFEF] rounded-full p-4 transition-all duration-300
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
