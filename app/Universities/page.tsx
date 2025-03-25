"use client";
import React from "react";
import dynamic from "next/dynamic";

const UniversityComponent = dynamic(
  () => import("@/Plugins/UniPlugin/Components/UniComponent"),
  { ssr: false }
);

const Page = () => {
  return (
    <div>
      <UniversityComponent />
    </div>
  );
};

export default Page;
