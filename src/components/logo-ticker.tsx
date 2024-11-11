"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
export default function LogoTicker() {
  return (
    <div className="py-8 bg-white flex justify-center">
      <div className="">
        <div className="flex overflow-hidden max-w-[1150px] [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src="/assets/logo-acme.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
            <Image
              src="/assets/logo-quantum.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
            <Image
              src="/assets/logo-echo.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
            <Image
              src="/assets/logo-pulse.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
            <Image
              src="/assets/logo-apex.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
            <Image
              src="/assets/logo-celestial.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />

            {/** Second set of logos   */}
            <Image
              src="/assets/logo-acme.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
            <Image
              src="/assets/logo-quantum.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
            <Image
              src="/assets/logo-echo.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
            <Image
              src="/assets/logo-pulse.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
            <Image
              src="/assets/logo-apex.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
            <Image
              src="/assets/logo-celestial.png"
              alt="logo"
              width={100}
              height={40}
              className="logo-ticker"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
