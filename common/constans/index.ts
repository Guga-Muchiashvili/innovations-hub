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
