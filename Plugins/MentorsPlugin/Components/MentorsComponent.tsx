import React from "react";
import buildingImg from "../../../public/building.png";
import Image from "next/image";
const MentorsComponent = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-4 pb-12">
      <Image
        src={buildingImg.src}
        alt="building"
        width={1000}
        height={1000}
        className="w-full sm:w-[60vw] h-2/5  md:w-[420px] md:h-[420px] opacity-65"
      />
      <h1 className="text-xl md:text-2xl text-[#6A6A6A]">
        გვერდი მზადების პროცესშია
      </h1>
    </div>
  );
};

export default MentorsComponent;
