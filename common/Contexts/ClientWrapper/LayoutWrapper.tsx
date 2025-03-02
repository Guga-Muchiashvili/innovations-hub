"use client"; // This makes it a client component

import { usePathname } from "next/navigation";
import NavBar from "@/common/components/NavBar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideNavBar =
    pathname.startsWith("/Exchanges/") || pathname.startsWith("/Local/");

  return (
    <div className="flex h-screen font-georgian">
      {!hideNavBar && (
        <div className="xl:w-80 h-full">
          <NavBar />
        </div>
      )}
      <div className="flex-1">{children}</div>
    </div>
  );
}
