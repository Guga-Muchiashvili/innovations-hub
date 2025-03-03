"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { NavRoutes } from "../constans";
import { IoMdClose } from "react-icons/io";

const FilterElement = () => {
  const router = useRouter();
  const [navBar, setNavBar] = useState(false);
  const [filter, setFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});

  const pathName = usePathname();

  const handleFilterChange = (
    key: keyof typeof selectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (navBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [navBar]);

  return (
    <>
      {navBar && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-[1000] flex justify-end"
          onClick={() => setNavBar(false)}
        >
          <div className="w-3/4 h-screen bg-white flex flex-col gap-5 px-3 sm:px-9 py-24">
            <IoMdClose
              className="absolute top-4 right-4 text-4xl cursor-pointer"
              onClick={() => setNavBar(false)}
            />
            {NavRoutes.map((item) => (
              <div
                key={item.label}
                className="group flex w-fit pr-4 duration-500 h-fit gap-7 items-center hover:bg-opacity-10 hover:rounded-full cursor-pointer"
                onClick={() => router.push(`/${item.route}`)}
              >
                <item.icon
                  className={`w-14 h-14 bg-[#EFEFEF] rounded-full p-4 transition-all duration-300
                          ${
                            "/" + item.route === pathName
                              ? "text-customPurple"
                              : "text-gray-600 group-hover:bg-[#E4F7FD]"
                          } `}
                />
                <h1
                  className={`text-lg font-semibold transition-all duration-300
                          ${
                            "/" + item.route === pathName
                              ? "text-customPurple"
                              : "text-[#616161] group-hover:text-[#4682B4]"
                          } `}
                >
                  {item.label}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="w-full flex md:justify-between md:pb-2 text-lg gap-4 flex-col h-fit xl:flex-row xl:items-end xl:h-fit xl:py-4">
        <div className="w-full flex items-center justify-between xl:hidden">
          <div
            className="w-fit h-fit flex items-center gap-3 md:gap-7 text-customPurple cursor-pointer"
            onClick={() => router.push("/Exchanges")}
          >
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="img"
              className="w-10 h-14"
            />
            <h1 className="text-xl font-extrabold">Innovators hub</h1>
          </div>
          <RiMenu3Line
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setNavBar(true)}
          />
          <div className="relative hidden sm:block">
            <IoSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              className="border-gray-200 border-[1px] rounded-xl outline-none pl-14 pr-4 w-full h-12 sm:w-80 text-gray-600 placeholder-gray-300"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="items-center hidden gap-7 pb-5 sm:flex w-full justify-start xl:justify-start">
          {["ქვეყანა", "ასაკი", "ორგანიზაცია", "ბიუჯეტი", "თარიღი"].map(
            (filterLabel) => (
              <h1
                key={filterLabel}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleFilterChange(filterLabel, "Selected")}
              >
                {filterLabel} <IoIosArrowDown />
              </h1>
            )
          )}
        </div>
        <div className="relative flex sm:hidden xl:flex h-fit">
          <IoSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            className="border-gray-200 border-[1px] rounded-xl outline-none pl-14 pr-4 w-full h-12 sm:w-80 text-gray-600 placeholder-gray-300"
            placeholder="Search..."
          />
        </div>
        <div
          className={`w-full sm:hidden flex-col items-center py-3 pb-8 px-3 flex ${
            filter
              ? "fixed top-0 left-0 w-screen h-screen bg-white z-[1001] overflow-y-auto"
              : ""
          }`}
        >
          <div className="w-full flex justify-between">
            <h1>ფილტრაცია</h1>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setFilter((prev) => !prev)}
            />
          </div>
          {filter && (
            <div className="w-full bg-white py-1 rounded-md shadow-sm max-h-screen overflow-y-auto">
              <div className="flex flex-col gap-3 mt-2">
                {[
                  {
                    label: "ქვეყანა",
                    name: "country",
                    options: ["საქართველო", "აშშ", "ინგლისი", "გერმანია"],
                  },
                  {
                    label: "ასაკი",
                    name: "age",
                    options: ["14-17", "18-24", "25-34", "35-44"],
                  },
                  {
                    label: "ორგანიზაცია",
                    name: "organization",
                    options: ["Google", "Microsoft", "Amazon", "Facebook"],
                  },
                ].map(({ label, name, options }) => (
                  <div key={name} className="mt-2">
                    <h2 className="text-sm">{label}</h2>
                    <div className="flex flex-wrap gap-2 border-b-[1px] pb-5 border-gray-300 mt-5">
                      {options.map((option) => (
                        <label
                          key={option}
                          className={`px-4 py-2 border rounded-full cursor-pointer ${
                            selectedFilters[name] === option
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          <input
                            type="radio"
                            name={name}
                            value={option}
                            className="hidden"
                            onChange={() => handleFilterChange(name, option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <h2 className="text-sm">თარიღი</h2>
                <input
                  type="date"
                  className="w-full border rounded-md p-2 text-black bg-gray-100"
                  onChange={(e) => handleFilterChange("თარიღი", e.target.value)}
                  placeholder="startDate"
                />
                <input
                  type="date"
                  className="w-full border rounded-md p-2 text-black bg-gray-100"
                  onChange={(e) => handleFilterChange("თარიღი", e.target.value)}
                  placeholder="endDate"
                />
                <h2 className="text-sm">ბიუჯეტი</h2>
                <input
                  type="number"
                  placeholder="შეიყვანეთ თანხა"
                  className="w-full border rounded-md p-2 text-black bg-gray-100"
                  onChange={(e) =>
                    handleFilterChange("ბიუჯეტი", e.target.value)
                  }
                />
                <button
                  className="bg-blue-600 py-2 text-white rounded-xl mt-5"
                  onClick={() => setFilter(false)}
                >
                  შენახვა
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterElement;
