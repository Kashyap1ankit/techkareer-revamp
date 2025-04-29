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
      className={`flex justify-between items-center fixed top-12 -translate-x-1/2 left-1/2 w-3/4 duration-300 z-50 ${
        isScrolled ? "backdrop-blur-lg bg-white/30 p-2 rounded-md" : ""
      }`}
    >
      <Image
        src={"/logo.png"}
        width={200}
        height={200}
        alt="logo"
        className=" rounded-md"
      />

      <div>
        <Button
          className={`text-white bg-zinc-200 py-6 px-10 text-lg rounded-full text-black font-bold ${mona_sans.className}   hover:bg-zinc-200 cursor-pointer tracking-wide flex justify-center items-center min-w-36`}
        >
          <span>Login</span>
          <CircleArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
