"use client";
import dynamic from "next/dynamic";
import React from "react";

const LocalPage = dynamic(
  () => import("@/Plugins/LocalsPlugin/Components/LocalProjectPageComponent"),
  { ssr: false }
);
const Page = () => {
  return <LocalPage />;
};

export default Page;
