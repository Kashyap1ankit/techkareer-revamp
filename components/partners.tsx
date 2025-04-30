"use client";

import { mona_sans } from "@/lib/font";
import { motion } from "motion/react";
import Image from "next/image";

export default function TalentPartners() {
  const partnerLogos = [
    "https://www.techkareer.com/codingninjas.png",
    "https://www.techkareer.com/scaler.png",
    "https://www.techkareer.com/almabetter.png",
    "https://www.techkareer.com/100x.png",
  ];

  return (
    <motion.section
      className="w-full "
      initial={{ y: -75, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
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
        Our Talent<span className="text-sky-300"> Partners</span>
      </h2>

      <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 items-center">
        {partnerLogos.map((logo, i) => (
          <Image
            key={i}
            src={logo}
            width={200}
            height={200}
            alt={`partner-${i}`}
            className="w-52 md:w-64"
          />
        ))}
      </div>
    </motion.section>
  );
}
