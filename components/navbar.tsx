"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { mona_sans } from "@/lib/font";
import { CircleArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`flex justify-between items-center fixed top-12 md:-translate-x-1/2 md:left-1/2 w-11/12 md:w-3/4 duration-300 z-50 ${
        isScrolled ? "backdrop-blur-lg bg-white/30 p-2 rounded-md" : ""
      }`}
    >
      <Image
        src={"/logo.png"}
        width={200}
        height={200}
        alt="logo"
        className="w-36 md:w-52 rounded-md"
      />

      <div>
        <Button
          className={`text-white bg-zinc-200 md:py-6 md:px-10 text-sm md:text-lg rounded-full text-black font-bold ${mona_sans.className}   hover:bg-zinc-200 cursor-pointer tracking-wide flex justify-center items-center min-w-36`}
        >
          <span>Login</span>
          <CircleArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
