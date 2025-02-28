"use client";
import React from "react";
import LocalImg from "../../../public/local.jpg";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const LocalCardElement = () => {
  const route = useRouter();
  return (
    <div className="w-96 rounded-xl overflow-hidden relative border border-gray-300 bg-white shadow-lg">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={LocalImg.src}
          alt="exchange program"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C150,80 350,0 500,30 L500,50 L0,50 Z"
            fill="white"
          ></path>
        </svg>
      </div>

      <div className="p-5 flex flex-col gap-2">
        <h1 className="text-lg text-[#1E1E1E] font-semibold">
          ფრენსის ფესტივალი თბილისში
        </h1>
        <p className="text-[#144B81] text-sm font-medium">
          ორგანიზატორი: ორგანიზაციის სახელი
        </p>
        <p className="text-[#144B81] text-sm font-medium">საფასური: უფასო</p>
        <p className="text-[#144B81] text-sm font-medium">ასაკი: 14+</p>
        <p className="text-[#144B81] text-sm font-medium">
          პერიოდი: 10.05.2025
        </p>
      </div>

      <div className="absolute bottom-4 right-4 p-2 rounded-full bg-[#ADD8E6] h-10 w-10 flex items-center justify-center cursor-pointer shadow-md">
        <MdKeyboardArrowRight
          className="text-white text-2xl"
          onClick={() => route.push("/Local/543")}
        />
      </div>
    </div>
  );
};

export default LocalCardElement;
