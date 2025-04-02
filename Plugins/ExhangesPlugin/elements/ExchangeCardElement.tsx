import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { motion } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";
import Image from "next/image";
import exchangeIcon from "../../../public/exchangeicon.png";
import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import exchangeProjectImg from "../../../public/exchangephoto.png";
import flightDetailImg from "../../../public/university-detail-modal-flight-element.png";
import calendarImg from "../../../public/calendar.png";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border bg-[#DEE6ED] p-4 rounded-xl w-full">
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

export default function ScholarshipCard({ onClose }: { onClose: () => void }) {
  const [showUniversityInformation, setshowUniversityInformation] =
    useState(false);
  const [showFlightInformation, setshowFlightInformation] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-start gap-10 items-center w-full md:w-[50%] left-0 absolute top-0 flex-col h-screen xl:w-[44%] bg-white p-3 py-8 md:p-2 lg:p-4 xl:pt-8 overflow-y-auto max-h-screen hide-scrollbar"
    >
      <X
        className="absolute top-2 right-2 cursor-pointer"
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
              src={exchangeIcon.src}
              alt="exchangeIcon"
              width={1300}
              height={1300}
              className="w-8 h-8"
            />
            <h1 className="text-lg">გაცვლითი</h1>
          </div>
          <div className="w-[45%] md:w-[55%] h-full bg-white items-center translate-y-[-1px] flex pb-4 justify-end z-30 rounded-bl-3xl">
            <h1 className="text-[#1A3765] text-xs lg:text-lg text-center w-full xl:text-right xl:mr-6 font-medium">
              დედლაინი : 04.05.2025
            </h1>
          </div>
        </div>
        <div className="absolute bottom-[-1px] left-0 w-[30%] md:w-[45%] z-30 2xl:w-[30%]  rounded-tr-3xl h-10 lg:h-14 bg-white flex items-center justify-between px-3 lg:px-8">
          <MdOutlineMailOutline className="text-xl lg:text-4xl cursor-pointer py-[1px]" />
          <TfiLocationPin className="text-xl lg:text-4xl cursor-pointer py-[1px]" />
          <BsTelephone className="text-xl lg:text-4xl cursor-pointer py-[1px]" />
        </div>
        <Image
          src={exchangeProjectImg.src}
          alt="university"
          width={1000}
          height={500}
          className="relative h-80 lg:h-full xl:max-h-[55vh] rounded-3xl "
        ></Image>
      </div>
      <div className="w-full flex items-center gap-6 flex-wrap justify-center">
        <div
          className="relative w-full lg:w-[47%] cursor-pointer"
          onMouseEnter={() => setshowUniversityInformation(true)}
        >
          {!showUniversityInformation && (
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center p-3 transition-opacity duration-300 rounded-xl text-white flex-col">
              <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full text-center text-white text-xl xl:text-lg">
                ნახე პროექტის დეტალები
              </h1>
            </div>
          )}
          <Image
            src={flightDetailImg.src}
            alt="universityImg"
            height={500}
            width={500}
            className="w-full"
          />
          {showUniversityInformation && (
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col gap-3 2xl:gap-2 md:gap-1 px-3 py-3 transition-opacity duration-300 rounded-xl text-white "
            >
              <h1 className=" w-full text-xl lg:text-sm xl:text-lg 2xl:text-xl ">
                გაცვლითის დეტალები
              </h1>
              <h1 className=" w-full font-extralight mt-2 lg:mt-0 lg:text-[13px] xl:mt-2 2xl:text-lg 2xl:font-light">
                ქვეყანა : რუმინეთი
              </h1>
              <h1 className=" w-full font-extralight lg:text-[13px] 2xl:text-lg 2xl:font-light">
                ასაკი : 18+
              </h1>
              <h1 className=" w-full font-extralight lg:text-[13px] 2xl:text-lg 2xl:font-light">
                მასპინძელი ორგ : Ados Family
              </h1>
              <h1 className=" w-full font-extralight lg:text-[13px] 2xl:text-lg 2xl:font-light">
                გამგზავნი ორგ : youth Center of Georgia
              </h1>
            </motion.div>
          )}
        </div>
        <div
          className="relative w-full lg:w-[47%] cursor-pointer"
          onMouseEnter={() => setshowFlightInformation(true)}
        >
          {!showFlightInformation && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-3 transition-opacity duration-300 rounded-xl text-white flex-col">
              <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full text-center text-white text-xl xl:text-lg">
                ნახე თარიღები
              </h1>
            </div>
          )}
          <Image
            src={calendarImg.src}
            alt="flightDetails"
            height={500}
            width={500}
            className="w-full"
          />
          {showFlightInformation && (
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-3 transition-opacity duration-300 rounded-xl text-white flex-col"
            >
              <h1 className="text-xl md:text-sm  xl:text-lg  2xl:text-xl w-full">
                მოგზაურობის დეტალები
              </h1>
              <h1 className="mt-4 lg:mt-2 w-full lg:text-sm 2xl:text-base font-extralight">
                ხანგრძლივობა : 3 თვე
              </h1>
              <div className="flex items-center gap-3 mt-5 lg:mt-2 xl:mt-3 2xl:mt-4 w-full">
                <div className="flex flex-col gap-1 xl:gap-[1px] w-full">
                  <h1 className="text-sm xl:text-lg 2xl:text-xl w-full">
                    24.05.2025
                  </h1>
                  <h1 className="md:text-[8px] text-xs w-full font-extralight xl:text-xs">
                    გამგზავრების თარიღი
                  </h1>
                </div>
                <div className="flex flex-col gap-1 xl:gap-[1px] w-full ">
                  <h1 className="text-sm xl:text-lg 2xl:text-xl w-full">
                    24.05.2025
                  </h1>
                  <h1 className="md:text-[8px] text-xs w-full xl:text-xs font-extralight">
                    გამგზავრების თარიღი
                  </h1>
                </div>
              </div>
              <div className="mt-5 lg:mt-2 xl:mt-4 flex flex-col gap-2 lg:gap-1 2xl:gap-2 2xl:mt-5 text-[15px] w-full font-light lg:text-xs 2xl:text-lg">
                <h1 className="">დაფინანსება : ნაწილობრივი</h1>
                <h1>საფასური : 200$</h1>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Accordion title="მეტი ინფორმაცია">
        <h1>აქ არის მეტი ინფორმაცია ...</h1>
      </Accordion>
    </motion.div>
  );
}
