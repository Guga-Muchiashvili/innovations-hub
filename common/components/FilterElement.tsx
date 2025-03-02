"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { NavRoutes } from "../constans";

const FilterElement = () => {
  const router = useRouter();
  const [navBar, setNavBar] = useState(false);
  const [filter, setFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});
  const pathName = usePathname();

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [category]: value }));
  };

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
      )}

      <div className="w-full flex flex-col gap-4 h-fit xl:flex-row xl:items-end xl:h-fit xl:py-4">
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
              className="w-10 h-14 "
            />
            <h1 className="text-xl font-extrabold">Innovators hub</h1>
          </div>
          <RiMenu3Line
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setNavBar(true)}
          />
        </div>

        <div className="w-full flex justify-between sm:hidden py-3 pb-2 px-3 border-gray-400">
          <h1 className="text-lg font-bold">ფილტრები</h1>
          <IoIosArrowDown
            className="text-2xl cursor-pointer"
            onClick={() => setFilter((prev) => !prev)}
          />
        </div>

        {filter && (
          <div className="w-full bg-white p-4 rounded-md shadow-sm">
            <div className="flex flex-col gap-3">
              {/* ქვეყანა */}
              <h2 className="text-sm">ქვეყანა</h2>
              <div className="flex flex-wrap gap-2 border-b-[1px] pb-2 border-gray-300">
                {["საქართველო", "აშშ", "ინგლისი", "გერმანია"].map((country) => (
                  <label
                    key={country}
                    className={`px-4 py-2 border rounded-full cursor-pointer ${
                      selectedFilters["ქვეყანა"] === country
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="country"
                      value={country}
                      className="hidden"
                      onChange={() => handleFilterChange("ქვეყანა", country)}
                    />
                    {country}
                  </label>
                ))}
              </div>

              {/* ასაკი */}
              <h2 className="text-sm">ასაკი</h2>
              <div className="flex flex-wrap gap-2 border-b-[1px] pb-2 border-gray-300">
                {["14-17", "18-24", "25-34", "35-44"].map((age) => (
                  <label
                    key={age}
                    className={`px-4 py-2 border rounded-full cursor-pointer ${
                      selectedFilters["ასაკი"] === age
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="age"
                      value={age}
                      className="hidden"
                      onChange={() => handleFilterChange("ასაკი", age)}
                    />
                    {age} წ.
                  </label>
                ))}
              </div>

              {/* ორგანიზაცია */}
              <h2 className="text-sm">ორგანიზაცია</h2>
              <div className="flex flex-wrap gap-2 border-b-[1px] pb-2 border-gray-300">
                {["Google", "Microsoft", "Amazon", "Facebook"].map((org) => (
                  <label
                    key={org}
                    className={`px-4 py-2 border rounded-full cursor-pointer ${
                      selectedFilters["ორგანიზაცია"] === org
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="organization"
                      value={org}
                      className="hidden"
                      onChange={() => handleFilterChange("ორგანიზაცია", org)}
                    />
                    {org}
                  </label>
                ))}
              </div>

              {/* თარიღი */}
              <h2 className="text-sm">თარიღი</h2>
              <input
                type="date"
                className="w-full border rounded-md p-2 text-black bg-gray-100"
                onChange={(e) => handleFilterChange("თარიღი", e.target.value)}
              />

              {/* ბიუჯეტი */}
              <h2 className="text-sm">ბიუჯეტი</h2>
              <input
                type="number"
                placeholder="შეიყვანეთ თანხა"
                className="w-full border rounded-md p-2 text-black bg-gray-100"
                onChange={(e) => handleFilterChange("ბიუჯეტი", e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterElement;
