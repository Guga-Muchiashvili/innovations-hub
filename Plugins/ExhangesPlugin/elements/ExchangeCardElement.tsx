import React, { ReactElement, ReactNode, useState } from "react";
import {
  CalendarDays,
  DollarSign,
  Globe,
  User,
  ChevronDown,
  MapIcon,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type CardContentProps = {
  children: React.ReactNode;
};

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

type InfoItemProps = {
  icon: ReactNode;
  label: string;
  value: string | number;
  iconColor: string;
};

const Button = ({ children, className, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-xl transition duration-300 ease-in-out ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className }: CardProps) => (
  <div
    className={`bg-white rounded-2xl p-1 md:p-3 lg:p-6 py-4 sm:p-8 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children }: CardContentProps) => (
  <div className="space-y-6">{children}</div>
);

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 p-4 rounded-xl">
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

const InfoItem = ({ icon, label, value, iconColor }: InfoItemProps) => {
  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as ReactElement);
    } else {
      return <span className={`w-5 h-5 ${iconColor}`}>{icon}</span>;
    }
  };

  return (
    <div className={`${iconColor} flex gap-2 items-center`}>
      {renderIcon()}
      <span className="text-gray-700">
        {label}:{" "}
        {label == "გამშვები" ? (
          <a href="Organisations/123" className="underline">
            <strong>{value}</strong>
          </a>
        ) : (
          <strong>{value}</strong>
        )}
      </span>
    </div>
  );
};
const SectionDivider = () => (
  <div className="border-t border-gray-200 my-6"></div>
);

export default function ScholarshipCard({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-start items-center w-full md:w-[50%] left-0 absolute top-0 flex-col h-screen xl:w-[32%] bg-white p-1 md:p-2 lg:p-4 overflow-y-auto max-h-screen hide-scrollbar"
    >
      <X
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => onClose()}
      />
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center px-5">
        გაცვლითი პროგრამა თბილისში
      </h2>
      <Card>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:flex md:justify-between">
            <InfoItem
              icon={<User />}
              label="ასაკი"
              value="18+"
              iconColor="text-blue-600"
            />
            <InfoItem
              icon={<MapIcon />}
              label="ლოკაცია"
              value="ირლანდია, კორკი"
              iconColor="text-red-500"
            />
          </div>
          <SectionDivider />

          <InfoItem
            icon={<Globe />}
            label="გამშვები"
            value="Erasmus+"
            iconColor="text-green-600"
          />
          <InfoItem
            icon={<Globe />}
            label="მასპინძელი"
            value="University of Edinburgh"
            iconColor="text-purple-600"
          />
          <SectionDivider />

          <InfoItem
            icon={<DollarSign />}
            label="დაფინანსება"
            value="სრული"
            iconColor="text-green-500"
          />
          <InfoItem
            icon={<DollarSign />}
            label="საფასური"
            value="60$"
            iconColor="text-green-600"
          />
          <SectionDivider />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InfoItem
              icon={<CalendarDays />}
              label="გამგზავრება"
              value="04.05.2025"
              iconColor="text-gray-500"
            />
            <InfoItem
              icon={<CalendarDays />}
              label="ჩამოსვლა"
              value="10.05.2025"
              iconColor="text-gray-500"
            />
            <InfoItem
              icon={<CalendarDays />}
              label="deadline"
              value="25.05.2025"
              iconColor="text-gray-500"
            />
          </div>
          <SectionDivider />

          <div className="space-y-4">
            <Accordion title="კრიტერიუმები">
              <ul className="list-disc list-inside space-y-2">
                <li>უნდა იყოს მინიმუმ 18 წლის</li>
                <li>უნდა ფლობდე ინგლისურ ენას</li>
                <li>უნდა გქონდეს შესაბამისი განათლება ან გამოცდილება</li>
              </ul>
            </Accordion>
            <Accordion title="რა არ ფინანსდება">
              <ul className="list-disc list-inside space-y-2">
                <li>სამოგზაურო დაზღვევა</li>
                <li>ვიზის ხარჯები</li>
                <li>პირადი ხარჯები</li>
              </ul>
            </Accordion>
            <Accordion title="დაფინანსება მოიცავს">
              <ul className="list-disc list-inside space-y-2">
                <li>საცხოვრებელი</li>
                <li>კვება</li>
                <li>ტრანსპორტი</li>
              </ul>
            </Accordion>
            <Accordion title="დამატებითი მასალა">
              <p className="text-gray-700">
                გთხოვთ, წარადგინოთ CV, სამოტივაციო წერილი და სარეკომენდაციო
                წერილი.
              </p>
            </Accordion>
          </div>

          <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            რეგისტრაციის ფორმა
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
