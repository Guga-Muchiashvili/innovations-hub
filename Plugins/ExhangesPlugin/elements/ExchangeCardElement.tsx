import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
// import { BsClipboardData } from "react-icons/bs";
// import { FaUserEdit } from "react-icons/fa";
// import { MdOutlineFlight } from "react-icons/md";
// import { SiSololearn } from "react-icons/si";
// import Link from "next/link";

// type CardProps = {
//   children: React.ReactNode;
//   className?: string;
// };

// type AccordionProps = {
//   title: string;
//   children: React.ReactNode;
// };

// const Card = ({ children, className }: CardProps) => (
//   <div
//     className={`bg-white rounded-2xl flex flex-col gap-11 w-full p-1 md:p-3 lg:p-6 py-4 sm:p-8 ${className}`}
//   >
//     {children}
//   </div>
// );

// const Accordion = ({ title, children }: AccordionProps) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border bg-[#DEE6ED] p-4 rounded-xl">
//       <button
//         className="flex justify-between items-center w-full text-left font-semibold text-gray-800 cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {title}
//         <ChevronDown
//           className={`w-5 h-5 transition-transform ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </button>
//       {isOpen && <div className="mt-4 text-gray-700">{children}</div>}
//     </div>
//   );
// };

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
    </motion.div>
  );
}
