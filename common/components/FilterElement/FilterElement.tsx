import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import logo from "../../../public/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { filterElementsLocal } from "../../constans";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { FilterSchema } from "../../schema";
import CountrySelector from "./elements/CountryFilter";
import OrganizationSelector from "./elements/OrganisationFilter";
import MultiSelectAgeCategory from "./elements/AgeFilter";
import DatePeriodSelector from "./elements/DateFilter";
import BudgetSelector from "./elements/BudgetFiltet";

const FilterElement = ({ type }: { type: "Local" | "Exchange" }) => {
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageOrganisation, setCurrentPageOrganisation] = useState(1);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryOrganisation, setSearchQueryOrganisation] = useState("");

  const { control, getValues, watch } = useForm({
    resolver: yupResolver(FilterSchema(type)),
    defaultValues: {
      ...(type === "Local" ? { country: [] } : [""]),
      age: [],
      organisation: [],
      budget: [],
      date: [],
      search: "",
    },
  });

  const toggleDropdown = (field: string) => {
    setOpenDropdown((prev) => (prev === field ? null : field));
  };

  const country = watch("country");

  console.log(country);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(getValues());

  return (
    <div className="w-full flex flex-col items-center text-lg gap-7 h-fit justify-between text-color3 px-2 lg:px-0 py-4">
      <div className="flex flex-col w-full gap-10 sm:gap-5 lg:flex-row-reverse items-center ">
        <div className="flex flex-col gap-6 justify-between sm:flex-row w-full lg:w-fit items-center">
          <div className="flex items-center gap-4 w-full lg:hidden">
            <Image
              src={logo.src}
              alt="logo"
              className="w-10 h-14"
              width={500}
              height={200}
            />
            <h1 className="text-[#2A296F] font-semibold font-sans text-xl">
              Innovators hub
            </h1>
            <RiMenu3Fill className="text-3xl absolute right-3 sm:hidden" />
          </div>
          <div className="relative h-12 w-full lg:w-80 ">
            <IoSearch className="absolute left-4 top-1/2 translate-y-[-50%] text-gray-400 text-xl" />
            <Controller
              name="search"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  className="border-[#E9E9E9] border-[1px] outline-none rounded-xl pl-12 pr-4 w-full h-12 text-gray-600 placeholder-gray-400"
                  placeholder="Search..."
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="w-full flex h-fit gap-6 flex-col px-2 text-black">
          <form className="relative w-full justify-center flex flex-col px-2 text-black">
            <div
              className="w-full flex justify-between md:hidden"
              onClick={() => setShowFilterMobile((prev) => !prev)}
            >
              <h1 className=" text-lg">ფილტრაცია</h1>
              <IoIosArrowDown className="text-2xl" />
            </div>
            {showFilterMobile && (
              <div className="w-full h-fit mt-3 md:hidden">
                {filterElementsLocal.map((item) => (
                  <div
                    className="w-full border-t-[1px] border-gray-600 flex flex-col py-5 gap-5"
                    key={item.name}
                  >
                    <h1 className="text-[#3D3D3D]">{item.name}</h1>
                    <div className="w-full flex gap flex-wrap gap-2">
                      {item.answers.map((answer) => (
                        <div
                          className="w-fit py-1 px-2 rounded-xl border-[1px] border-gray-500"
                          key={answer}
                        >
                          {answer}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div
              className="items-center gap-7 hidden md:flex text-color3 relative"
              ref={dropdownRef}
            >
              {type == "Exchange" && (
                <div className="relative">
                  <h1
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => toggleDropdown("country")}
                  >
                    ქვეყანა <IoIosArrowDown />
                  </h1>
                  {openDropdown === "country" && (
                    <div className="absolute top-full left-0 mt-2 w-[90vw] max-w-3xl bg-white shadow-lg p-3 border rounded-xl z-50">
                      <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                          <CountrySelector
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            selectedCountries={field.value || []}
                            setSelectedCountries={(selected) =>
                              field.onChange(selected)
                            }
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                          />
                        )}
                      />
                    </div>
                  )}
                </div>
              )}
              <div className="relative">
                <h1
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => toggleDropdown("age")}
                >
                  ასაკი <IoIosArrowDown />
                </h1>
                {openDropdown === "age" && (
                  <div className="absolute w-[90vw] max-w-3xl top-full left-0 mt-2  p-3 rounded-xl">
                    <Controller
                      name="age"
                      control={control}
                      render={({ field }) => (
                        <MultiSelectAgeCategory
                          selectedAges={
                            Array.isArray(field.value) ? field.value : []
                          }
                          setSelectedAges={(selected) =>
                            field.onChange(selected)
                          }
                        />
                      )}
                    />
                  </div>
                )}
              </div>

              {/* Organization */}
              <div className="relative">
                <h1
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => toggleDropdown("organization")}
                >
                  ორგანიზაცია <IoIosArrowDown />
                </h1>
                {openDropdown === "organization" && (
                  <div className="absolute w-[90vw] max-w-3xl top-full left-0 mt-2  p-3 rounded-xl">
                    <Controller
                      name="organisation"
                      control={control}
                      render={({ field }) => (
                        <OrganizationSelector
                          currentPage={currentPageOrganisation}
                          setCurrentPage={setCurrentPageOrganisation}
                          selectedOrganizations={field.value || []}
                          setSelectedOrganizations={(newSelection) =>
                            field.onChange(newSelection)
                          }
                          searchQuery={searchQueryOrganisation}
                          setSearchQuery={setSearchQueryOrganisation}
                        />
                      )}
                    />
                  </div>
                )}
              </div>

              {/* Date */}
              <div className="relative">
                <h1
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => toggleDropdown("date")}
                >
                  თარიღი <IoIosArrowDown />
                </h1>
                {openDropdown === "date" && (
                  <div className="absolute top-full left-0 mt-2 w-[90vw] max-w-3xl bg-white shadow-lg p-3 border rounded-xl z-50">
                    <Controller
                      name="date"
                      control={control}
                      render={({ field }) => (
                        <DatePeriodSelector
                          selectedPeriods={field.value || []}
                          setselectedPeriods={field.onChange}
                        />
                      )}
                    />
                  </div>
                )}
              </div>
              <div className="relative">
                <h1
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => toggleDropdown("budget")}
                >
                  ბიუჯეტი <IoIosArrowDown />
                </h1>
                {openDropdown === "budget" && (
                  <div className="absolute top-full left-0 mt-2 w-[90vw] max-w-3xl bg-white shadow-lg p-3 border rounded-xl z-50">
                    <Controller
                      name="budget"
                      control={control}
                      render={({ field }) => (
                        <BudgetSelector
                          selectedBudget={field.value || []}
                          setselectedBudget={field.onChange}
                        />
                      )}
                    />
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mt-4">
        {/* Display Selected Filters */}
        <div className="flex flex-wrap gap-3">
          {/* Display Country */}
          {(getValues("country") || []).length > 0 && (
            <div className="flex items-center py-2 px-4 border border-gray-300 rounded-full">
              <span className="text-sm font-medium">Country:</span>
              {(getValues("country") || []).map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-xs ml-2"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          {/* Display Age */}
          {(getValues("age") || [])?.length > 0 && (
            <div className="flex items-center py-2 px-4 border border-gray-300 rounded-full">
              <span className="text-sm font-medium">Age:</span>
              {getValues("age")?.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-xs ml-2"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Display Organization */}
          {(getValues("organisation") || [])?.length > 0 && (
            <div className="flex items-center py-2 px-4 border border-gray-300 rounded-full">
              <span className="text-sm font-medium">Organization:</span>
              {getValues("organisation")?.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-xs ml-2"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Display Date */}
          {(getValues("date") || [])?.length > 0 && (
            <div className="flex items-center py-2 px-4 border border-gray-300 rounded-full">
              <span className="text-sm font-medium">Date:</span>
              {getValues("date")?.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-xs ml-2"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Display Budget */}
          {(getValues("budget") || [])?.length > 0 && (
            <div className="flex items-center py-2 px-4 border border-gray-300 rounded-full">
              <span className="text-sm font-medium">Budget:</span>
              {getValues("budget")?.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-xs ml-2"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterElement;
