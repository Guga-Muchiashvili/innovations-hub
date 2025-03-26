import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import university from "../../../public/university.jpg";
import acr from "../../../public/acr.png";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import universityDetailImg from "../../../public/university-detail-modal-element.png";
import flightDetailImg from "../../../public/university-detail-modal-flight-element.png";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border bg-[#dee6ed70] p-4 rounded-xl w-full">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-gray-800 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && <div className="mt-4 text-gray-700">{children}</div>}
    </div>
  );
};

export default function UniversityDetailCard({
  onClose,
}: {
  onClose: () => void;
}) {
  const [showUniversityInformation, setshowUniversityInformation] =
    useState(false);
  const [showFlightInformation, setshowFlightInformation] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -220 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-start gap-10 items-center w-full md:w-[50%] left-0 absolute top-0 flex-col h-screen xl:w-[38%] bg-white p-3 py-8 md:p-2 lg:p-4 xl:pt-8 overflow-y-auto max-h-screen hide-scrollbar"
    >
      <X
        className="absolute top-1 right-2 cursor-pointer"
        onClick={() => onClose()}
      />
      <div className="w-full h-fit relative flex items-center justify-center mt-4">
        <div className="absolute w-full h-full bg-black top-0 flex items-center justify-center left-0 bg-opacity-50 z-10 rounded-3xl">
          <div className="flex flex-col items-center gap-2 px-3 md:gap-4 text-white z-30 w-full xl:w-2/3 text-center">
            <h1 className="text-2xl">Global Horizons University</h1>
            <h1 className="text-lg">
              პროგრამა: Sustainable Innovation and Environmental Management
            </h1>
            <button className="mt-2 bg-[#413FBA] rounded-3xl py-3 w-36 md:w-44">
              რეგისტრაცია
            </button>
          </div>
        </div>

        <div className="absolute top-0 z-20 w-full h-12 flex justify-between">
          <div className="flex pl-3 pt-3 w-1/2 md:w-2/6 gap-2 text-white text-xs items-center">
            <Image
              src={acr.src}
              alt="helo"
              width={300}
              height={300}
              className="w-6 h-6"
            />
            <h1 className="">აკრედიტირებული</h1>
          </div>
          <div className="w-[45%] md:w-[55%] h-full bg-white items-center flex pb-4 justify-end z-30 rounded-bl-3xl">
            <button className="mt-2 bg-[#1D4078] rounded-3xl h-10 w-36 md:w-44 text-white">
              ვებსაიტი
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-[30%] md:w-[45%] z-30  rounded-tr-3xl h-10 lg:h-14 bg-white flex items-center justify-between px-3 lg:px-8">
          <MdOutlineMailOutline className="text-xl lg:text-4xl cursor-pointer py-[1px]" />
          <TfiLocationPin className="text-xl lg:text-4xl cursor-pointer py-[1px]" />
          <BsTelephone className="text-xl lg:text-4xl cursor-pointer py-[1px]" />
        </div>
        <Image
          src={university.src}
          alt="university"
          width={1000}
          height={500}
          className="relative h-80 lg:h-full rounded-3xl "
        ></Image>
      </div>
      <div className="w-full flex items-center gap-6 flex-wrap justify-center">
        <div
          className="relative w-full lg:w-[48%]"
          onMouseEnter={() => setshowUniversityInformation(true)}
        >
          <Image
            src={universityDetailImg.src}
            alt="universityImg"
            height={500}
            width={500}
            className="w-full"
          />
          {showUniversityInformation && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col gap-1 px-3 py-4 transition-opacity duration-300 rounded-xl text-white">
              <h1 className="text-xl md:text-sm xl:text-xl w-full">
                პროგრამა : sustaible innovation and Environmental Managment
              </h1>
              <h1 className=" w-full font-extralight mt-2">ქვეყანა : 3 თვე</h1>
              <h1 className=" w-full font-extralight">
                პროგრამის ტიპი : გაცვლითი
              </h1>
              <h1 className=" w-full font-extralight">
                რეგისტრაციის დედლაინი : 04.05.2025
              </h1>
            </div>
          )}
        </div>
        <div
          className="relative w-full lg:w-[47%]"
          onMouseEnter={() => setshowFlightInformation(true)}
        >
          <Image
            src={flightDetailImg.src}
            alt="universityImg"
            height={500}
            width={500}
            className="w-full"
          />
          {showFlightInformation && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-3 transition-opacity duration-300 rounded-xl text-white flex-col">
              <h1 className="text-xl md:text-sm xl:text-xl w-full">
                მოგზაურობის დეტალები
              </h1>
              <h1 className="mt-2 w-full font-extralight">
                ხანგრძლივობა : 3 თვე
              </h1>
              <div className="flex items-center gap-3  mt-5 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <h1 className="text-sm xl:text-xl w-full">24.05.2025</h1>
                  <h1 className="md:text-[8px] text-xs w-full font-extralight xl:text-xs">
                    გამგზავრების თარიღი
                  </h1>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h1 className="text-sm xl:text-xl w-full">24.05.2025</h1>
                  <h1 className="md:text-[8px] text-xs w-full xl:text-xs font-extralight">
                    გამგზავრების თარიღი
                  </h1>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2 text-[15px] w-full font-light">
                <h1 className="">დაფინანსება : ნაწილობრივი</h1>
                <h1>საფასური : 200$</h1>
              </div>
            </div>
          )}
        </div>
      </div>
      <Accordion title="მეტი ინფორმაცია">
        <h1>აქ არის მეტი ინფორმაცია ...</h1>
      </Accordion>
    </motion.div>
  );
}
