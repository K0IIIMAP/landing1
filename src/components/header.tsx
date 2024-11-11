import { MenuIcon, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky  top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center gap-3 items-center bg-black py-3 text-white text-sm ">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <p>Get started for free</p>
        <MoveRight className="size-4" />
      </div>
      <div className="p-5">
        <div className="">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/logosaas.png"
              alt="logo"
              height={40}
              width={40}
            ></Image>
            <MenuIcon className="size-6 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="#">Features</Link>
              <Link href="#">Cutsomers</Link>
              <Link href="#">About</Link>
              <Link href="#">Updates</Link>
              <Link href="#">Help</Link>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-center justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
