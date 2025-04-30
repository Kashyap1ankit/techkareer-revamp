"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mona_sans, roboto } from "@/lib/font";
import SeparatorWithText from "./divider";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  const duplicatedItems = [...items, ...items];

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children); //eslint-disable-line

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent_0.1%,white_2%,white_98%,transparent_99.09%)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl px-8 py-6  bg-primary-bg"
            key={`${item.name}-${idx}`} // use index to differentiate
          >
            <Avatar className="w-16 h-16 absolute -top-4 left-1/2 -translate-x-1/2 border-4">
              <AvatarImage
                src={item.image || "https://github.com/shadcn.png"}
                alt={item.name}
              />
              <AvatarFallback>
                {item.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="mt-12">
              <p className={`${roboto.className} text-sm text-gray-400`}>
                {item.quote}
              </p>

              <div className="mt-8">
                <SeparatorWithText
                  text={item.title}
                  className={`${mona_sans.className} font-bold text-white`}
                />
                <p
                  className={`${roboto.className} text-center mt-4 text-lg text-gray-500`}
                >
                  {item.name}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
