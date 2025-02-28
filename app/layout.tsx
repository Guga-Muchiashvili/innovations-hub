import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/common/Contexts/ClientWrapper/LayoutWrapper";

export const metadata: Metadata = {
  title: "Innovators Hub",
  description: "Place where you can find your dream project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
