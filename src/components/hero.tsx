"use client";
import { MoveRight } from "lucide-react";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 px-[3%] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]"
    >
      <div className="">
        <div className="md:flex md:items-center">
          <div className="md:w-[478px] lg:flex-1  md:h-[480px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3e] tracking-tight mt-6 md:max-w-[500px]">
              Celebrate the joy of accomplishment with an app design to track
              your progress, motivate your efforts,and celebrate your success.
            </p>
            <div className="flex gap-1 items-center mt-[30px] ">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text">
                Learn more <MoveRight className="size-5 ml-2" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src="/assets/cog.png"
              alt="cog img"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 xxl:left-[500px]"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src="/assets/cylinder.png"
              width={220}
              height={220}
              alt="cylinderimg"
              className="hidden md:block -top-8  -left-32 md:absolute  xxl:left-[300px]"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src="/assets/noodle.png"
              width={220}
              height={220}
              alt="noodleimg"
              className="absolute top-[524px] left-[448px] hidden lg:block rotate-[30deg]  xxl:left-[1000px]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
