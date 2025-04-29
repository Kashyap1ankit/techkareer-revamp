"use client";

import { jobOpenings } from "@/lib/constant";
import { mona_sans, roboto } from "@/lib/font";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function JobOpenings() {
  return (
    <motion.div
      className="w-full "
      initial={{ y: -75, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.95,
        type: "tween",
        ease: "circOut",
      }}
      viewport={{ once: true }}
    >
      <p
        className={`${mona_sans.className} text-4xl md:text-5xl text-white text-center`}
      >
        100+ Dream Job<span className="text-sky-300"> Openings</span>
      </p>

      <p
        className={`${roboto.className} md:w-1/2 text-gray-400 mx-auto text-center mt-8`}
      >
        Explore thousands of job opportunities and find your dream job with out
        comprehensive job search platform
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 ">
        {jobOpenings.map((e, i) => {
          return (
            <div
              key={i}
              className="group flex flex-col items-left gap-8 bg-primary-bg hover:bg-tertiary-bg duration-500 p-4 rounded-2xl cursor-pointer"
            >
              <Image
                src={e.logo}
                width={200}
                height={200}
                className="w-16  h-16  rounded-full "
                alt={i.toString()}
              />

              <div className="flex flex-col gap-6">
                <div>
                  <p className={`${mona_sans.className} text-2xl text-white `}>
                    {e.role}
                  </p>

                  <p className="text-gray-600 group-hover:text-red-50  mt-2 text-xs">
                    {e.location} work
                  </p>
                </div>

                <p className={`text-gray-400 mt-2 ${roboto.className}`}>
                  {e.description}
                </p>

                <div className="flex justify-start gap-6">
                  <p className=" group-hover:bg-primary-bg rounded-full px-6 py-2 bg-tertiary-bg text-xs text-white">
                    {e.type}
                  </p>
                  <p className=" group-hover:bg-primary-bg rounded-full px-6 py-2 bg-tertiary-bg text-xs text-white">
                    {e.location}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={`mt-12 w-fit px-4 py-2 rounded-full text-white bg-[#3261ef] mx-auto ${mona_sans.className} flex justify-between items-center gap-2 cursor-pointer`}
      >
        <p>View More</p>
        <ArrowRight className="size-4" />
      </div>
    </motion.div>
  );
}
