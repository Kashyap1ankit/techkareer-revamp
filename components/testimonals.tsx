"use client";

import { mona_sans, roboto } from "@/lib/font";
import { motion } from "motion/react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { testimonials } from "@/lib/constant";

export default function Testimonals() {
  return (
    <motion.section
      className="w-full  text-center "
      initial={{ y: -75, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.95,
        type: "tween",
        ease: "circOut",
      }}
      viewport={{ once: true }}
      id="know-more"
    >
      <h2
        className={`${mona_sans.className} text-3xl sm:text-4xl md:text-5xl font-bold text-white`}
      >
        What Our <span className="text-sky-300">Client</span> Say
      </h2>

      <p
        className={`${roboto.className} text-sm sm:text-base md:text-lg text-gray-400 mt-6 max-w-full sm:max-w-2xl md:max-w-xl mx-auto`}
      >
        From reducing time-to-hire to improving team collaboration, our platform
        is trusted by HR professionals & Founders to deliver results.
      </p>

      <div className="mt-12 w-full flex flex-col items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
    </motion.section>
  );
}
