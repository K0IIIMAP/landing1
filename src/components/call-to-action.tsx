"use client";
import { MoveRight } from "lucide-react";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CallToAction() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24"
    >
      <div>
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-p mt-5">
            Celebrate the joy of accomplishments with an app designed to track
            your progress and motivate your efforts.
          </p>

          <motion.img
            alt="star image"
            width={360}
            height={360}
            src="/assets/star.png"
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            alt="spring image"
            width={360}
            height={360}
            src="/assets/spring.png"
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            Learn more <MoveRight className="size-5 ml-2 " />
          </button>
        </div>
      </div>
    </section>
  );
}
