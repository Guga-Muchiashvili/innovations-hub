"use client";
import React from "react";
import FilterElement from "@/common/components/FilterElement";
import LocalCardElement from "../elements/LocalCardElement";

const LocalPage = () => {
  return (
    <div className="w-full px-10 z-40">
      <div className="w-full sticky top-2 bg-white z-50">
        <FilterElement />
      </div>
      <div className="w-full flex pb-5 h-fit flex-wrap gap-2 justify-center overflow-hidden">
        <div className="w-full px-10 flex h-[calc(100vh-9rem)] flex-wrap gap-4 py-2 justify-center overflow-y-auto hide-scrollbar scroll-smooth">
          {Array.from({ length: 14 }).map((_, index) => (
            <LocalCardElement key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalPage;
