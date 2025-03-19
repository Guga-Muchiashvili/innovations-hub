"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import image from "../../../public/globeimg.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import LocalCardElement from "@/Plugins/LocalsPlugin/elements/LocalCardElement";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import exchangeTemplateImg from "../../../public/exchangetemplate.jpg";
import plane from "../../../public/plane.jpg";
import company from "../../../public/company.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

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
    <div className="w-[99vw] min-h-screen">
      {showDetailProject && (
        <div
          className="w-screen h-screen fixed bg-black z-[100] bg-opacity-60  flex items-center justify-center"
          onClick={() => toggleProjectModal()}
        >
          <div
            className="w-[95vw] h-[95vh] md:h-fit 2xl:w-[70vw] sm:w-4/5 lg:w-4/5 xl:w-[70%] rounded-xl relative gap-3 lg:gap-7 bg-[#E9F8FF] flex flex-col px-2 md:px-7 py-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-[-12px] rounded-[150%] z-50 cursor-pointer bg-[#E9F8FF] right-6 w-28 flex items-center justify-center text-4xl">
              <IoClose onClick={() => toggleProjectModal()} />
            </div>
            <div className="w-full flex gap-6 h-[90%] md:h-[60vh] lg:h-[420px] 2xl:h-[35vh] flex-col lg:flex-row">
              <div className="w-full lg:w-[46%] h-[40%] lg:h-full  rounded-xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={exchangeTemplateImg.src}
                    width={1000}
                    height={1000}
                    alt="exchangetempolate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#3A6D8C] opacity-60"></div>
                  <div className="absolute top-0 left-0 w-full h-full px-3 lg:px-5 xl:px-5 py-3 justify-between lg:py-4 xl:py-2 2xl:py-5 text-white flex flex-col z-10">
                    <h1 className="text-md  xl:text-2xl 2xl:text-[28px] opacity-100 font-semibold">
                      გაცვლითი პროგრამა ირლანდიაში, კორკში
                    </h1>
                    <div className="w-full flex-col items-center mt-0 lg:mt-3 justify-between lg:items-start">
                      <h1 className="text-2xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-5xl font-semibold ">
                        +18
                      </h1>
                      <div className="lg:mt-8 flex lg:flex-col gap-3 sm:mt-6 md:mt-5 lg:gap-1 items-center justify-between lg:items-start">
                        <div className="flex flex-col gap-[2px] lg:gap-1">
                          <h1 className="text-lg lg:text-[22px]">10.05.2025</h1>
                          <h1 className="text-[12px]">გამგზავრება</h1>
                        </div>
                        <div className="flex flex-col gap-[2px] lg:gap-1">
                          <h1 className="text-lg lg:text-[22px]">10.05.2025</h1>
                          <h1 className="text-[12px]">ჩამოსვლა</h1>
                        </div>
                        <div className="flex flex-col gap-[2px] lg:gap-1 lg:hidden">
                          <h1 className="text-lg lg:text-[22px]">20.05.2025</h1>
                          <h1 className="text-[12px]">დედლაინი</h1>
                        </div>
                      </div>
                    </div>
                    <div className="lg:mt-7 xl:mb-3 flex flex-col lg:gap-3">
                      <h1 className="text-[13px] hidden lg:block">
                        დედლაინი : 04.05.2025
                      </h1>
                      <button className="bg-slate-500 py-[6px] lg:py-2 rounded-full">
                        ფორმა
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[30%] h-[27%] lg:h-full  rounded-xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={plane.src}
                    width={1000}
                    height={100}
                    alt="exchangetempolate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#3A6D8C] opacity-60 text-white"></div>
                  <div className="absolute top-0 left-0 w-full h-full px-3 lg:px-3 xl:px-3 py-3 lg:justify-end lg:py-4 xl:py-2 2xl:py-5 text-white flex flex-col z-10">
                    <h1 className="text-lg  xl:text-[19px] 2xl:text-2xl opacity-100 font-semibold">
                      მოგზაურობის დეტალები
                    </h1>
                    <div className="w-full flex flex-col gap-2 md:mt-3 lg:gap-3 mt-2 lg:mb-4 text-sm">
                      <div className="flex gap-2 items-center">
                        <IoLocationOutline className="text-xl lg:text-2xl" />
                        <h1>ლოკაცია : თბილისი</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <CiMoneyBill className="text-xl lg:text-2xl" />
                        <h1>დაფინანსება : ნაწილობრივ</h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <MdOutlineAttachMoney className="text-xl lg:text-2xl" />
                        <h1>საფასური : 200$</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[27%] h-[25%] lg:h-full bg-slate-500 rounded-xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={company.src}
                    width={1000}
                    height={100}
                    alt="exchangetempolate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#3A6D8C] opacity-60"></div>
                  <div className="absolute top-0 left-0 w-full h-full px-3 lg:px-5 xl:px-3 py-2 justify-start lg:py-4 xl:py-2 2xl:py-5 text-white flex flex-col z-10">
                    <h1 className="text-lg  xl:text-[19px] 2xl:text-2xl opacity-100 font-semibold">
                      ორგანიზაციები
                    </h1>
                    <div className="w-full flex flex-col gap-1 lg:gap-5 lg:mt-6 md:mt-1 mt-1 text-sm">
                      <div className="flex flex-col xl:gap-1">
                        <h1 className="text-md lg:text-[22px]">
                          youth center of georgia
                        </h1>
                        <h1 className="text-[10px] lg:text-[12px]">
                          გამშვები ორგანიზაცია
                        </h1>
                      </div>
                      <div className="flex flex-col xl:gap-1">
                        <h1 className="text-md  lg:text-[22px]">adus family</h1>
                        <h1 className="text-[10px] lg:text-[12px]">
                          მიმღები ორგანიზაცია
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-5 lg:px-10 py-4 rounded-full border-[1px] border-black flex items-center justify-between cursor-pointer">
              <h1 className="text-[#213555] text-xl">მეტი ინფორმაცია</h1>
              <GoArrowUpRight className="text-2xl lg:text-4xl" />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col xl:flex-row items-center xl:items-start xl:gap-6 ">
        <div className="flex flex-col gap-11 w-full xl:w-2/5 md:px-12 px-1 py-2 md:py-16">
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl px-6 py-3 w-36">
            ვებსაიტი
          </button>
        </div>

        <div className="relative w-full xl:w-3/5 h-[65vh] xl:h-[70vh]">
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
            <div className="absolute top-[5%] right-[12%] xl:right-[5%] bg-gray-200 rounded-xl shadow-lg w-36 h-52 md:w-48 md:h-64 flex items-center justify-center xl:w-80">
              📷
            </div>
            <div className="absolute bottom-[10%] right-[10%] md:right-[40%] lg:right-2 lg:bottom-3 xl:right-[10%] xl:bottom-[5%] bg-gray-200 rounded-xl shadow-lg w-36 h-52 md:w-48 md:h-64 flex items-center justify-center xl:w-72">
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
        <div className="w-full h-fit flex gap-5 mt-5 md:mt-12 overflow-x-auto justify-start relative ">
          <div className="flex gap-5 justify-start relative">
            <LocalCardElement onClick={() => toggleProjectModal()} />
            <LocalCardElement onClick={() => toggleProjectModal()} />
            <LocalCardElement onClick={() => toggleProjectModal()} />
            <LocalCardElement onClick={() => toggleProjectModal()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationDetailPage;
