import { IoLocationSharp } from "react-icons/io5";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { MdSchool } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

export const NavRoutes = [
  { label: "ლოკალური", icon: IoLocationSharp, route: "Local" },
  { label: "გაცვლითი", icon: PiAirplaneTakeoffFill, route: "Exchanges" },
  { label: "უნივერსიტეტები", icon: MdSchool, route: "Universities" },
  { label: "მენტორი", icon: FaChalkboardTeacher, route: "Mentors" },
];

export const filterElementsLocal = [
  {
    name: "ქვეყანა",
    answers: [
      "საქართველო",
      "ესპანეთი",
      "ინგლისი",
      "ამერიკა",
      "იტალია",
      "საფრანგეთი",
    ],
  },
  {
    name: "ასაკი",
    answers: ["0-12", "12-18", "18 - 35"],
  },
  {
    name: "ორგანიზაცია",
    answers: ["AISEC", "YCG", "ERASMUS"],
  },
  {
    name: "თარიღი",
    answers: ["მიმდინარე", "მომავალი", "მოკლე პერიოდი"],
  },
  {
    name: "ბიუჯეტი",
    answers: ["დაუფინანსებელი", "ნაწილობრივ", "დაფინანსებული"],
  },
];
