"use client";
import React from "react";
import dynamic from "next/dynamic";

const ExchangePage = dynamic(
  () => import("@/Plugins/ExhangesPlugin/Components/ExchangesComponent"),
  { ssr: false }
);

const Page = () => {
  return (
    <div>
      <ExchangePage />
    </div>
  );
};

export default Page;
