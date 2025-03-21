"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import image from "../../../public/globeimg.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import LocalCardElement from "@/Plugins/LocalsPlugin/elements/LocalCardElement";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { AiFillTikTok } from "react-icons/ai";

import logo from "../../../public/logo.png";
import ExchangeProjectModal from "../elements/ExchangeProjectModal";

const OrganisationDetailPage = () => {
  const navigate = useRouter();
  const [showDetailProject, setShowDetailProject] = useState(false);

  const toggleProjectModal = () => {
    setShowDetailProject((prev) => !prev);
  };

  useEffect(() => {
    if (showDetailProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDetailProject]);

  return (
    <div className="w-[99.1vw] min-h-screen">
      {showDetailProject && (
        <ExchangeProjectModal toggleProjectModal={toggleProjectModal} />
      )}

      <div className="flex flex-col xl:flex-row items-center xl:items-start xl:gap-6 ">
        <div className="flex flex-col gap-4 w-full xl:w-2/5 md:px-12 px-2 py-2 md:py-16">
          <MdKeyboardArrowLeft
            className="text-white w-12 h-12 bg-gray-300 rounded-full p-3 cursor-pointer"
            onClick={() => navigate.push("/Exchanges")}
          />
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
          <button className="bg-blue-500 hover:bg-blue-600  text-white font-semibold rounded-xl px-6 py-3 w-36">
            ვებსაიტი
          </button>
        </div>

        <div className="relative w-full xl:w-3/5 h-[65vh] xl:h-full">
          <Image
            src={image.src}
            alt="globe"
            width={1000}
            height={700}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0">
            <div className="absolute top-[20%] left-[5%] lg:left-[45%] xl:left-[2%] 2xl:left-[40%] bg-gray-200 rounded-xl shadow-lg w-40 h-56 md:w-52 md:h-72 flex items-center  xl:w-96 justify-center">
              📷
            </div>
            <div className="absolute top-[2%] right-[12%] xl:right-[5%] bg-gray-200 rounded-xl shadow-lg w-36 h-52 md:w-48 md:h-64 flex items-center justify-center xl:w-80">
              📷
            </div>
            <div className="absolute bottom-[2%] right-[10%] md:right-[40%] lg:right-2 lg:bottom-3 xl:right-[10%] xl:bottom-[5%] bg-gray-200 rounded-xl shadow-lg w-36 h-52 md:w-48 md:h-64 flex items-center justify-center xl:w-72">
              📷
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[500px] bg-[#F6F6F6] p-2 lg:p-12 relative ">
        <div className="w-full flex justify-between flex-col md:flex-row gap-3">
          <h1 className="text-[#37368A] text-xl md:text-2xl lg:text-4xl font-semibold">
            ორგანიზაციის პროექტები
          </h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 md:px-6 py-3 lg:py-3 w-32 md:w-40 lg:w-52 rounded-xl">
            ნახე ყველა
          </button>
        </div>
        <MdOutlineKeyboardArrowLeft className="absolute z-50 top-1/2 translate-y-[-50%] text-5xl left-0 cursor-pointer" />
        <MdOutlineKeyboardArrowRight className="absolute z-50 top-1/2 translate-y-[-50%] text-5xl right-0 cursor-pointer" />
        <div className="w-full h-fit flex gap-5 mt-5 md:mt-12 overflow-x-auto justify-start overflow-hidden relative hide-scrollbar">
          <div className="flex gap-5 justify-start relative ">
            <LocalCardElement onClick={() => toggleProjectModal()} />
            <LocalCardElement onClick={() => toggleProjectModal()} />
            <LocalCardElement onClick={() => toggleProjectModal()} />
            <LocalCardElement onClick={() => toggleProjectModal()} />
            <LocalCardElement onClick={() => toggleProjectModal()} />
            <LocalCardElement onClick={() => toggleProjectModal()} />
          </div>
        </div>
      </div>
      <div className="bg-white h-36 flex gap-5 lg:gap-0 px-4 md:px-2 xl:px-12 flex-col lg:flex-row items-center justify-between md:py-0">
        <div className=" items-center hidden md:flex gap-8">
          <Image
            src={logo.src}
            alt="logo"
            width={500}
            height={500}
            className="md:w-9 w-8 md:h-14 h-10 "
          />
          <h1 className="text-[#2A296F] text-xl font-semibold">
            Innovators hub
          </h1>
        </div>
        <div className="flex w-full lg:w-fit items-center md:justify-between md:w-full gap-5 flex-col md:flex-row mt-6 md:gap-7 md:mt-0 ">
          <div className="flex items-start justify-end w-full md:w-fit flex-col gap-2 lg:flex-row md:gap-6">
            <div className="flex justify-start w-fit gap-6 md:flex-row rounded-2xl">
              <MdOutlineEmail className="text-3xl" />
              <h1 className="text-[#5E5DAC] text-xl">Info@aiesecworld.org</h1>
            </div>
            <div className="flex items-center justify-start w-fit gap-6  rounded-2xl">
              <FaPhone className="text-2xl" />
              <h1 className="text-[#5E5DAC] text-xl">+995 555 00 26 46</h1>
            </div>
          </div>
          <div className="flex items-center pb-5 md:pb-0 gap-4 w-full md:w-fit justify-start">
            <RiFacebookCircleFill className="text-2xl bg-[#F6F6F6] rounded-2xl w-12 h-12 md:w-16 md:h-16 px-2 md:px-4" />
            <GrInstagram className="text-2xl bg-[#F6F6F6] rounded-2xl w-12 h-12 md:w-16 md:h-16 px-2 md:px-4" />
            <AiFillTikTok className="text-2xl bg-[#F6F6F6] rounded-2xl w-12 h-12 md:w-16 md:h-16 px-2 md:px-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationDetailPage;
