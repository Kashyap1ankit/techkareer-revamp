"use client";

import { Button } from "@/components/ui/button";
import { mona_sans, roboto } from "@/lib/font";
import { Pointer } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-12 text-center">
      {/* Star  */}
      <motion.div
        className="flex justify-start gap-2 items-center bg-linear-to-b from-tertiary-bg to-secondary-bg w-fit rounded-full p-1 px-3 mx-auto"
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          type: "tween",
          ease: "circOut",
        }}
      >
        <span className="text-3xl bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
          &#10022;
        </span>

        <p
          className={`${mona_sans.className} text-xs text-gray-200 tracking-wider`}
        >
          Hire Smarter Faster
        </p>
      </motion.div>

      {/* Text hero  */}
      <div>
        <motion.p
          className={`${mona_sans.className} font-bold text-8xl text-white `}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            type: "tween",
            ease: "circOut",
          }}
        >
          Ready.Set.Hire
        </motion.p>

        <motion.p
          className={`${roboto.className} text-xl w-1/2  text-gray-500  mx-auto mt-12 tracking-wide`}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
              delay: 0.35,
            },
          }}
        >
          TechKareer has helped more than a dozen companies from USA, Dubai, and
          India find top tech talent to build their dream teams.
        </motion.p>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
              delay: 0.4,
            },
          }}
          // className="mt-12 flex justify-between border-2"
        >
          {/* <div className="flex flex-row items-center justify-center ">
          <AnimatedTooltip items={companies} />
        </div> */}

          <Button
            className={`text-white bg-zinc-200 py-6 px-10 text-lg rounded-full text-black font-bold ${mona_sans.className}   hover:bg-zinc-200 cursor-pointer tracking-wide flex justify-center items-center min-w-52 mx-auto shadow-md shadow-indigo-500/100 mt-12 `}
          >
            <span>Know More</span>
            <Pointer className="size-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
