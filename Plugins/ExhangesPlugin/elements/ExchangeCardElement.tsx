"use client";
import React from "react";
import exchangeImg from "../../../public/exchangephoto.png";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import france from "../../../public/france.png";
import top from "../../../public/top.svg";

const ExchangeCardElement = () => {
  const route = useRouter();
  return (
    <div className="w-[350px] sm:w-96  h-[339px] rounded-xl overflow-hidden relative border border-gray-300 bg-white shadow-lg group">
      <div className="relative w-full h-[80%] overflow-hidden transition-all duration-300 group-hover:h-[60%]">
        <div className="flex items-center justify-between absolute top-3 z-40 w-full px-5">
          <span className="bg-white text-[#190066] font-semibold text-[13px] px-3 py-1 rounded-full">
            14-16 წ.
          </span>
          <span className="text-xs text-gray px-2 py-[6px] bg-white rounded-2xl flex items-center gap-1">
            <Image
              src={france.src}
              width={30}
              height={30}
              alt="country"
              className="w-5 h-4 rounded-md"
            />
            საფრანგეთი
          </span>
        </div>
        <Image
          src={exchangeImg.src}
          alt="exchange program"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <Image
          src={top.src}
          alt="wave design"
          width={100}
          height={30}
          className="absolute bottom-[-1px] left-0 w-full h-fit"
        />
      </div>

      <div className="px-5 flex flex-col gap-1 translate-y-[-10px] group-hover:translate-y-[-15px] z-40 bg-white">
        <h1 className="text-lg text-color3 font-semibold">
          ფრენსის ფესტივალი ტიბლიში
        </h1>
        <p className="text-color2 text-base font-semibold ">
          პერიოდი : 22.02.2025 - 26.02.025
        </p>
        <h1 className="text-sm text-color2 hidden group-hover:flex">
          ორგანიზაცია : ორგანიზაციის სახელი
        </h1>
        <h1 className="text-sm text-color2 hidden group-hover:flex">
          დედლაინი : 24.05.2025
        </h1>
        <div className="w-full hidden justify-between group-hover:flex">
          <h1 className="text-color6 text-lg">ნაწილობრივი</h1>
          <div
            className=" bg-[#517DAE] text-white px-4 py-1 rounded-3xl items-center flex cursor-pointer"
            onClick={() => route.push("/Exchanges/543")}
          >
            მეტი <MdKeyboardArrowRight className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCardElement;
