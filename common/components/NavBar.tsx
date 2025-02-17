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
    <div className="py-9 pl-10 pr-8 border-r-[1px] h-screen border-gray-500 flex flex-col gap-36">
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
            className="flex w-fit pr-4 duration-500 h-fit gap-7 items-center hover:bg-customPurple hover:bg-opacity-10 hover:rounded-full cursor-pointer"
            onClick={() => route.push(`/${item.route}`)}
          >
            <item.icon
              className={`w-14 h-14 bg-[#EFEFEF] rounded-full p-4 ${
                "/" + item.route === pathName
                  ? "text-customPurple"
                  : "text-black"
              }`}
            />
            <h1
              className={`text-lg font-semibold ${
                "/" + item.route === pathName
                  ? "text-customPurple"
                  : "text-[#616161]"
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
