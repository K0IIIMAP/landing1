import {
  Facebook,
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Linkedin,
  Twitter,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div>
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image
            src="/assets/logosaas.png"
            alt="saas logo"
            height={40}
            width={40}
            className="relative"
          ></Image>
        </div>

        <nav className="flex flex-col gap-6 mt-6 md:flex-row justify-center">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Help</Link>
          <Link href="#">Careers</Link>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <Youtube />
          <Linkedin />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company Inc, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
