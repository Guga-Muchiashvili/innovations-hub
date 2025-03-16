"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import exchange from "../../../public/exchangephoto.png";

const ExchangeDetailComponent = () => {
  const images = [exchange.src, exchange.src, exchange.src];
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full min-h-screen px-2 lg:px-10 py-4 bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <div
        className="flex items-center w-full gap-3 text-customPurple cursor-pointer mb-8"
        onClick={() => router.push("/Exchanges")}
      >
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Logo"
          className="w-10 h-14"
        />
        <h1 className="text-xl font-bold">Innovators Hub</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl  xl:max-w-[80vw] xl:h-[45vh] 2xl:max-w-[100vw]">
        <div className="col-span-6 relative shadow-xl rounded-xl overflow-hidden w-full 2xl:h-[20vw] 2xl:w-2/5 ">
          <Image
            src={images[currentIndex]}
            alt="Exchange Program"
            height={800}
            width={800}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 bg-white shadow-lg rounded-full hover:bg-gray-200 transition"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white shadow-lg rounded-full hover:bg-gray-200 transition"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="col-span-6 flex flex-col gap-3 md:gap-5 text-gray-800">
          <h1 className="text-[#190066] text-xl md:text-4xl font-bold leading-tight">
            გაცვლითი პროგრამა საქართველოში, თბილისში
          </h1>
          <p className="text-[#144B81] text-lg font-semibold">
            გამგზავნი ორგანიზაცია: ორგანიზაცია
          </p>
          <p className="text-[#144B81] text-lg font-semibold">
            მასპინძელი ორგანიზაცია: ორგანიზაცია
          </p>
          <p className="text-[#144B81] text-lg">ქვეყანა: საქართველო</p>
          <p className="text-[#144B81] text-lg">ასაკი: 12-18</p>
          <p className="text-[#144B81] text-lg">დედლაინი: 05.02.2025</p>
          <p className="text-[#144B81] text-lg">
            გამგზავრების თარიღი: 10.05.2025
          </p>
          <p className="text-[#144B81] text-lg">
            დაბრუნების თარიღი: 25.05.2025
          </p>
          <button className="bg-blue-600 text-white text-lg font-semibold py-3 2xl:w-96 px-6 rounded-xl hover:bg-blue-700 transition shadow-lg">
            სარეგისტრაციო ფორმა
          </button>
        </div>
      </div>

      <div className="flex 2xl:gap-12 flex-col 2xl:flex-row">
        <div className="text-lg font-medium text-[#144B81] flex justify-start mt-12 leading-relaxed max-w-6xl xl:max-w-[100vw] 2xl:max-w-[40vw] text-left  mx-auto ">
          <p className="">
            ✨ თემატიკა: ეს გაცვლითი პროგრამა უზრუნველყოფს უნიკალურ
            შესაძლებლობას სტუდენტებისთვის და პროფესიონალებისთვის, გაიღრმავონ
            ცოდნა და უნარები კონკრეტულ სფეროში, როგორიცაა საერთაშორისო
            ურთიერთობები, გარემოს დაცვა ან ბიზნეს მართვა. პროგრამა მოიცავს
            სასწავლო კურსებს, სემინარებს და პრაქტიკულ გამოცდილებებს სხვადასხვა
            ქვეყანაში. 🌍
          </p>
        </div>

        <div className="flex flex-wrap gap-8 mt-12 max-w-6xl justify-start 2xl:max-w-[60vw]  xl:max-w-[100vw]  mx-auto w-full">
          {[
            "კრიტერიუმებს",
            "დაფინანსების პაკეტი მოიცავს",
            "არ ფინანსდება",
            "დამატებითი მასალა",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-white p-6 w-full lg:w-[48%] flex items-center justify-between rounded-xl  shadow-lg cursor-pointer hover:bg-blue-50 transition"
            >
              <h1 className="text-[#144B81] text-lg font-semibold">{title}</h1>
              <IoIosArrowDown className="text-[#144B81]" size={24} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeDetailComponent;
