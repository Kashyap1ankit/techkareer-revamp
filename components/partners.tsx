"use client";

import { mona_sans } from "@/lib/font";
import { motion } from "motion/react";
import Image from "next/image";

export default function TalentPartners() {
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
      <p className={`${mona_sans.className} text-5xl text-white text-center`}>
        Our Talent<span className="text-sky-300"> Partners</span>
      </p>

      <div className="flex justify-between items-center mt-12">
        {[
          "https://www.techkareer.com/codingninjas.png",
          "https://www.techkareer.com/scaler.png",
          "https://www.techkareer.com/almabetter.png",
          "https://www.techkareer.com/100x.png",
        ].map((e, i) => {
          return (
            <Image
              key={i}
              src={e}
              width={200}
              height={200}
              className="w-72 rounded-full "
              alt={i.toString()}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
