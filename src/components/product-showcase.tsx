"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [300, -300]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24  max-md:px-[1%] "
    >
      <div className="flex flex-col items-center">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity </div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with the template.
          </p>
        </div>
        <div className="relative w-full flex justify-center">
          <Image
            src="/assets/product-image.png"
            alt="products image"
            width={800}
            height={800}
            className="mt-10"
          />
          <motion.img
            src="/assets/pyramid.png"
            alt="products image"
            width={262}
            height={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{
              translateY,
            }}
          />
          <motion.img
            src="/assets/tube.png"
            alt="tube image"
            width={248}
            height={248}
            className="absolute bottom-24 -left-36 hidden md:block"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
}
