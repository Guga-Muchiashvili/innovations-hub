"use client";
import Image from "next/image";
import React from "react";
import image from "../../../public/globeimg.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";

const OrganisationDetailPage = () => {
  const navigate = useRouter();

  return (
    <div className="w-full min-h-screen">
      {/* Back Button & Text Section */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start xl:gap-6">
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 w-36">
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
      <div className="w-full h-screen bg-red-400 mt-10"></div>
    </div>
  );
};

export default OrganisationDetailPage;
