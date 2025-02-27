import FilterElement from "@/common/components/FilterElement";
import React from "react";
import exchangeImg from "../../public/exchanges.jpg";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

const ExchangePage = () => {
  return (
    <div className="w-full px-10">
      <FilterElement />
      <div className="w-full flex flex-wrap gap-3 justify-center">
        <div className="h-[331px] w-96 bg-[#C2C2C2] bg-opacity-35 rounded-xl p-4 relative">
          <div className="absolute bottom-4 right-5 p-2 rounded-full bg-[#ADD8E6] h-10 w-10 text-xl flex items-center justify-center cursor-pointer">
            <MdKeyboardArrowRight className="text-white" />
          </div>
          <Image
            src={exchangeImg.src}
            alt="image"
            width={200}
            height={200}
            className="w-full h-[60%] rounded-xl"
          />
          <div className="flex mt-2 flex-col gap-1">
            <h1 className="text-lg text-customPurple font-semibold">
              გაცვლითი პროგრამა საქართველ...
            </h1>
            <h1 className="text-[#144B81] font-medium">
              ორგანიზაცია : youth center of georgia
            </h1>
            <h1 className="text-[#144B81] font-medium">ქვეყანა :საქართველო</h1>
            <h1 className="text-[#144B81] font-medium">
              პერიოდი : 10.05.2025 / 25.05.2025
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
