"use client";
import React from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import exchange from "../../../public/exchangephoto.png";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";

const ExchangeDetailComponent = () => {
  const images = [exchange.src, exchange.src, exchange.src];
  const router = useRouter();

  return (
    <div className="w-full h-screen px-10 py-9">
      <div
        className="w-fit h-fit flex items-center gap-8 text-customPurple cursor-pointer"
        onClick={() => router.push("/Exchanges")}
      >
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="img"
          className="w-9 h-14"
        />
        <h1 className="text-xl font-extrabold">Innovators hub</h1>
      </div>

      <div className="w-full flex gap-12 mt-9">
        <div className="w-[45%] relative">
          <Image
            src={images[0]}
            alt="img"
            height={1000}
            width={1000}
            className="w-full h-[465px] rounded-xl"
          />

          <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 w-[120px] h-[50px] bg-white rounded-2xl flex justify-center rounded-b-none items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-200">
              <FaChevronLeft size={16} />
            </button>

            <button className="p-2 rounded-full bg-gray-200">
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="pr-10 flex flex-col gap-5 w-1/2">
          <h1 className="text-[#190066] text-[33px]">
            გაცვლითი პროგრამა საქართველოში, sadw თბილისში
          </h1>
          <h1 className="text-[#144B81]  text-2xl font-bold">
            გამგზავნი ორგანიზაცია : ორგანიზაცია
          </h1>
          <h1 className="text-[#144B81] text-2xl font-bold">
            მასპინძელი ორგანიზაცია : ორგანიზაცია
          </h1>
          <h1 className="text-[#144B81] text-2xl">ქვეყანა : საქართველო</h1>
          <h1 className="text-[#144B81] text-2xl">დედლაინი : 05.02.2025</h1>
          <h1 className="text-[#144B81] text-2xl">
            გამგზავრების თარიღი : 10.05.2025
          </h1>
          <h1 className="text-[#144B81] text-2xl">
            დაბრუნების თარიღი : 25.05.2025
          </h1>
          <h1 className="text-[#1E90FF] text-[22px] cursor-pointer">
            სარეგისტრაციო ფორმა
          </h1>
        </div>
      </div>

      <div className="text-[20px] font-medium text-[#144B81] mt-11">
        თემატიკა: ეს გაცვლითი პროგრამა უზრუნველყოფს უნიკალურ შესაძლებლობას
        სტუდენტებისთვის და პროფესიონალებისთვის, გაიღრმავონ ცოდნა და უნარები
        კონკრეტულ სფეროში, როგორიცაა საერთაშორისო ურთიერთობები, გარემოს დაცვა ან
        ბიზნეს მართვა. პროგრამა მოიცავს სასწავლო კურსებს, სემინარებს და
        პრაქტიკულ გამოცდილებებს სხვადასხვა ქვეყანაში. მონაწილეები გაეცნობიან
        ადგილობრივ კულტურას და განავითარებენ გლობალურ კავშირებს.
      </div>
      <div className="w-full flex flex-wrap gap-x-12 gap-y-7 mt-11 justify-center pb-5 text-[#144B81] font-semibold text-[20px]">
        <div className="w-[48%] bg-[#F1F1F1] p-6 flex items-center justify-between rounded-xl">
          <h1>კრიტერიუმებს :</h1>
          <IoIosArrowDown />
        </div>
        <div className="w-[48%] bg-[#F1F1F1] p-6 flex items-center justify-between rounded-xl">
          <h1>დაფინანსების პაკეტი მოიცავს :</h1>
          <IoIosArrowDown />
        </div>
        <div className="w-[48%] bg-[#F1F1F1] p-6 flex items-center justify-between rounded-xl">
          <h1>არ ფინანსდება :</h1>
          <IoIosArrowDown />
        </div>
        <div className="w-[48%] bg-[#F1F1F1] p-6 flex items-center justify-between rounded-xl">
          <h1>დამატებითი მასალა :</h1>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default ExchangeDetailComponent;
