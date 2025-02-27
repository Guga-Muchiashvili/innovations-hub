import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/common/components/NavBar";

export const metadata: Metadata = {
  title: "Innovators hub",
  description: "place where you can find your dream project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen font-georgian">
          <div className="w-80 h-full">
            <NavBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
