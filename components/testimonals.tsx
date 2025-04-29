"use client";

import { mona_sans, roboto } from "@/lib/font";
import { motion } from "motion/react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { testimonials } from "@/lib/constant";

export default function Testimonals() {
  return (
    <motion.div
      className="w-full text-center"
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
      <p className={`${mona_sans.className} text-5xl text-white`}>
        What Our Client Say
      </p>

      <p className={`${roboto.className} w-1/2 text-gray-400 mx-auto mt-8`}>
        From reducing time-to-hire to improving team collaboration, our platform
        is trusted by HR professional & Founders to deliver results
      </p>

      <div className="mt-12 w-full bg-transparent flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
    </motion.div>
  );
}
