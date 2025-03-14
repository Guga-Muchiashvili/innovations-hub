"use client";
import Image from "next/image";
import React from "react";
import image from "../../../public/globeimg.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import LocalCardElement from "@/Plugins/LocalsPlugin/elements/LocalCardElement";
import { FiPhone } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const OrganisationDetailPage = () => {
  const navigate = useRouter();

  return (
    <div className="w-full min-h-screen ">
      {/* Back Button & Text Section */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start xl:gap-6 ">
        <div className="flex flex-col gap-11 w-full xl:w-2/5 md:px-12 px-1 py-2 md:py-16">
          {/* Back Button */}
          <MdKeyboardArrowLeft
            className="text-white w-12 h-12 bg-gray-300 rounded-full p-3 cursor-pointer"
            onClick={() => navigate.push("/Exchanges")}
          />
          {/* Title & Description */}
          <div className="flex flex-col gap-7">
            <h1 className="text-3xl md:text-5xl text-[#488285] font-bold">
              Youth Center of Georgia
            </h1>
            <p className="text-md md:text-lg text-[#244A6F] leading-relaxed">
              AIESEC დაარსდა 1948 წელს და მისი მიზანია ახალგაზრდების ლიდერული
              უნარების განვითარება. ორგანიზაცია ახორციელებს საერთაშორისო
              სტაჟირებებსა და კულტურულ გაცვლით პროგრამებს, რაც ახალგაზრდებს
              აძლევს უნიკალურ შესაძლებლობას მიიღონ პროფესიული და პიროვნული
              გამოცდილება.
            </p>
            <p className="text-md md:text-lg text-[#244A6F] leading-relaxed">
              AIESEC ძირითადად 18-დან 30 წლამდე ასაკის პირებთან მუშაობს და
              პროგრამები მოიცავს განათლების, ბიზნესის, და სოციალურ პროექტებს,
              რაც ახალგაზრდებს გლობალური კავშირების დამყარებაში ეხმარება.
            </p>
          </div>
          {/* Website Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl px-6 py-3 w-36">
            ვებსაიტი
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full xl:w-3/5 h-[65vh] xl:h-[70vh]">
          {/* Background Image */}
          <Image
            src={image.src}
            alt="globe"
            width={1000}
            height={700}
            className="w-full h-full object-cover"
          />

          {/* Floating Cards */}
          <div className="absolute inset-0">
            <div className="absolute top-[20%] left-[5%] lg:left-[45%] xl:left-[2%] 2xl:left-[40%] bg-gray-200 rounded-xl shadow-lg w-40 h-56 md:w-52 md:h-72 flex items-center  xl:w-96 justify-center">
              📷
            </div>
            <div className="absolute top-[5%] right-[12%] xl:right-[5%] bg-gray-200 rounded-xl shadow-lg w-36 h-52 md:w-48 md:h-64 flex items-center justify-center xl:w-80">
              📷
            </div>
            <div className="absolute bottom-[10%] right-[10%] md:right-[40%] lg:right-2 lg:bottom-3 xl:right-[10%] xl:bottom-[5%] bg-gray-200 rounded-xl shadow-lg w-36 h-52 md:w-48 md:h-64 flex items-center justify-center xl:w-72">
              📷
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content (Optional) */}
      <div className="w-full h-fit bg-[#d8f4f5]  p-12">
        <div className="w-full flex justify-between">
          <h1 className="text-[#37368A] text-4xl font-semibold">
            ორგანიზაციის პროექტები
          </h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 w-52 rounded-xl">
            ნახე ყველა
          </button>
        </div>
        <div className="w-full flex gap-5 mt-20  justify-center relative">
          <MdOutlineKeyboardArrowLeft className="absolute top-1/2 translate-y-[-50%] text-5xl left-0 cursor-pointer" />
          <MdOutlineKeyboardArrowRight className="absolute top-1/2 translate-y-[-50%] text-5xl right-0 cursor-pointer" />
          <LocalCardElement />
          <LocalCardElement />
          <LocalCardElement />
          <LocalCardElement />
        </div>
      </div>
      <div className="w-full h-fit py-12  flex justify-center gap-12 px-12 relative">
        <h1 className="text-xl text-gray-500 absolute top-5 left-12">
          საკონტაქტო ინფორმაცია
        </h1>
        <div className="h-48  w-[550px] flex gap-16 px-6 bg-[#F6F6F6] rounded-xl justify-between items-center">
          <div className="flex flex-col items-center w-1/2">
            <FiPhone className="text-6xl" />
            <h1 className="mt-6 ">ტელეფონის ნომერი</h1>
            <h1 className="mt-1 text-[#5E5DAC] ">+995 555 00 26 46</h1>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <IoMailUnreadOutline className="text-6xl" />
            <h1 className="mt-6 ">ელფოსტა</h1>
            <h1 className="mt-1 text-[#5E5DAC] ">gugamucli22@gmail.com</h1>
          </div>
        </div>
        <div className="h-48 w-[550px] flex gap-16 px-6 bg-[#F6F6F6] rounded-xl justify-between items-center">
          <div className="flex flex-col items-center w-1/2">
            <CiGlobe className="text-6xl" />
            <h1 className="mt-6 ">ვებსაიტი</h1>
            <h1 className="mt-1 text-[#5E5DAC] ">mydiva.shop</h1>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <IoLocation className="text-6xl" />
            <h1 className="mt-6 ">ოფისის მისამართი</h1>
            <h1 className="mt-1 text-center text-[#5E5DAC] ">
              ვაზისუბნის დასახლება 17ა კორპუსი
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationDetailPage;
