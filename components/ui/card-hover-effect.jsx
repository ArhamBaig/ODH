"use client";
import { cn } from "@/util";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-9   py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-32 w-32 bg-neutral-300  block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="w-[43px] mx-auto">
            <Image
              alt="Dissertation Help topic image"
              className={cn("w-[80px] ", className)}
              src={"/assets/business.png"}
              height={80}
              width={80}
            />
            </div>
            <p className="">{item.title}</p>
            </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        " rounded-2xl  h-28 w-28 p-4 bg-gray-100  relative z-20 flex flex-col justify-center items-center text-black",
        className
      )}
    >
      <div className="relative z-30">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
