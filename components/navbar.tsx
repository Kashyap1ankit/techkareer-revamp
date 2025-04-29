import Image from "next/image";
import { Button } from "./ui/button";
import { mona_sans } from "@/lib/font";
import { CircleArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center fixed top-12 -translate-x-1/2 left-1/2 w-3/4 ">
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
