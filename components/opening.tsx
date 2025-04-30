"use client";

import { jobOpenings } from "@/lib/constant";
import { mona_sans, roboto } from "@/lib/font";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function JobOpenings() {
  return (
    <motion.section
      className="w-full px-4 sm:px-6 lg:px-8 "
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
      <h2
        className={`${mona_sans.className} text-3xl sm:text-4xl md:text-5xl text-white text-center font-bold`}
      >
        100+ Dream Job<span className="text-sky-300"> Openings</span>
      </h2>

      <p
        className={`${roboto.className} text-sm sm:text-base md:text-lg text-gray-400 text-center mt-6 max-w-full sm:max-w-2xl mx-auto`}
      >
        Explore thousands of job opportunities and find your dream job with our
        comprehensive job search platform.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {jobOpenings.map((e, i) => (
          <div
            key={i}
            className="group flex flex-col bg-primary-bg hover:bg-tertiary-bg transition-colors duration-500 p-6 rounded-2xl cursor-pointer"
          >
            <Image
              src={e.logo}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full mb-4"
              alt={`logo-${i}`}
            />

            <div className="flex flex-col gap-4">
              <div>
                <h3 className={`${mona_sans.className} text-xl text-white`}>
                  {e.role}
                </h3>
                <p className="text-gray-600 group-hover:text-red-50 mt-1 text-sm">
                  {e.location} work
                </p>
              </div>

              <p className={`${roboto.className} text-gray-400 text-sm`}>
                {e.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <span className="bg-tertiary-bg group-hover:bg-primary-bg text-xs text-white px-4 py-2 rounded-full">
                  {e.type}
                </span>
                <span className="bg-tertiary-bg group-hover:bg-primary-bg text-xs text-white px-4 py-2 rounded-full">
                  {e.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`mt-12 w-fit px-6 py-3 rounded-full text-white bg-[#3261ef] mx-auto ${mona_sans.className} flex items-center gap-2 cursor-pointer hover:bg-blue-700 transition`}
      >
        <span>View More</span>
        <ArrowRight className="size-4" />
      </div>
    </motion.section>
  );
}
