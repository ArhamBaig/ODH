"use client"
import { cn } from "@/util";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export const HoverEffect = ({
  items,
  className,
}) => {
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
                className="absolute inset-0 h-full w-full bg-neutral-200  block  rounded-3xl"
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
            <CardImage />
            <CardTitle>{item.title}</CardTitle>
            {/* <CardDescription>{item.description}</CardDescription> */}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        " rounded-2xl h-full w-full p-4 bg-gray-50 border border-transparent dark:border-white/[0.2]  relative z-20 flex flex-col justify-center items-center text-black",
        className
      )}
    >
        {/* <div className="w-24 h-24 bg-gradient-to-b from-black via-primary to-tertiary  absolute -top-10 rounded-full flex justify-center items-center ">
        <p className="text-6xl font-bold  bg-white text-center p-3 rounded-full h-20 w-20"> 1 </p>
        </div> */}
      <div className="relative z-30">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "mt-8 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardImage = ({
  className,
}) => {
  return (
    <Image
    alt="Dissertation Help topic image"
      className={cn(
        "",
        className
      )
    }
    src={"/assets/business.png"}
    height={100}
    width={100}
    />
  );
};
