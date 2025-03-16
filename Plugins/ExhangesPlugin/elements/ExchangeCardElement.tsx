import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { motion } from "framer-motion";
import { BsClipboardData } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ children, className }: CardProps) => (
  <div
    className={`bg-white rounded-2xl flex flex-col gap-11 w-full p-1 md:p-3 lg:p-6 py-4 sm:p-8 ${className}`}
  >
    {children}
  </div>
);

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border bg-[#DEE6ED] p-4 rounded-xl">
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
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-start items-center w-full md:w-[50%] left-0 absolute top-0 flex-col h-screen xl:w-[32%] bg-white p-1 md:p-2 lg:p-4 xl:pt-8 overflow-y-auto max-h-screen hide-scrollbar"
    >
      <X
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => onClose()}
      />
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 text-left px-2">
        გაცვლითი პროგრამა თბილისში
      </h2>
      <Card>
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-4 justify-start text-[#416E9A] items-center w-full">
            <BsClipboardData className="text-2xl" />
            <h1>პერსონალური ინფორმაცია</h1>
          </div>
          <div className="w-full border-l-[2px] border-[#7A98B5]  px-6 text-[#053359] text-lg flex flex-col gap-2">
            ასაკი : 18+
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-4 justify-start text-[#416E9A] items-center w-full">
            <SiSololearn className="text-2xl" />
            <h1>ორგანიზაციები</h1>
          </div>
          <div className="w-full border-l-[2px] border-[#7A98B5]  px-6 text-[#053359] text-lg flex flex-col gap-3">
            <h1>
              გამგზავნი : <Link href="/Organisations/123">Erasmus +</Link>
            </h1>
            <h1>
              მიმღები : <a href="">Ados family</a>
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-4 justify-start text-[#416E9A] items-center w-full">
            <MdOutlineFlight className="text-2xl" />
            <h1>პროექტის დეტალები</h1>
          </div>
          <div className="w-full border-l-[2px] border-[#7A98B5]  px-6 text-[#053359] text-lg flex flex-col gap-2">
            <h1>ქვეყანა : საქართველო</h1>
            <h1>დაფინანსება : ნაწილობრივ</h1>
            <h1>საფასური : 200$</h1>
            <h1>გამგზავნების თარიღი : 10.05.2025</h1>
            <h1>დაბრუნების თარიღი : 25.05.2025</h1>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-4 justify-start text-[#416E9A] items-center w-full">
            <FaUserEdit className="text-2xl" />
            <h1>რეგისტრაცია</h1>
          </div>
          <div className="w-full border-l-[2px] border-[#7A98B5]  px-6 text-[#053359] text-lg flex flex-col gap-2">
            <h1>რეგისტრაციის დედლაინი : 10.04.2025</h1>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Accordion title="მეტი ინფორმაცია">
            <h1>აქ არის მეტი ინფორმაცია ...</h1>
          </Accordion>
          <button className="w-full rounded-xl bg-[#205781] text-white text-xl py-3">
            სარეგისტრაციო ფორმა
          </button>
        </div>
      </Card>
    </motion.div>
  );
}
