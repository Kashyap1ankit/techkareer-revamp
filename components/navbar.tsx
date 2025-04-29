import Image from "next/image";
import { Button } from "./ui/button";
import { Montserrat } from "next/font/google";

const roboto = Montserrat({
  variable: "--font-roboto",
  subsets: ["cyrillic"],
});

export default function Navbar() {
  return (
    <div className="flex justify-between fixed top-12 -translate-x-1/2 left-1/2 w-1/2 ">
      <Image
        src={"/logo.png"}
        width={200}
        height={200}
        alt="logo"
        className=" rounded-md"
      />

      <div>
        <Button
          className={`text-white bg-primary-btn py-6 px-8 text-lg rounded-full text-black font-bold ${roboto.className}   hover:bg-primary-btn cursor-pointer`}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
