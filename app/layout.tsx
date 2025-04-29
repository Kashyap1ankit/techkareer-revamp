import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "TechKareer",
  description: "Hire best talent from us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-linear-to-b from-primary-bg to-secondary-bg min-h-screen max-w-7xl  mx-auto overflow-x-hidden px-4 md:px-0`}
      >
        <Navbar />
        <div className="mt-44">{children}</div>
      </body>
    </html>
  );
}
