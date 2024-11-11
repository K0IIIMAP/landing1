"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
interface Testimonial {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}
const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: "/assets/avatar-1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: "/assets/avatar-2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "/assets/avatar-3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "/assets/avatar-4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "/assets/avatar-5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "/assets/avatar-6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "/assets/avatar-7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "/assets/avatar-8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "/assets/avatar-9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
];
const TestimonialsColumn = ({
  column,
  duration,
}: {
  column: Testimonial[];
  duration?: number;
}) => {
  return (
    <div>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          duration: duration || 10,
        }}
        className="flex flex-col gap-6 pb-6 mt-10 "
      >
        {[...new Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {column.map(({ text, imageSrc, name, username }) => (
              <div className="card" key={imageSrc}>
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    height={40}
                    width={40}
                    src={imageSrc}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-white py-0 max-md:px-[1%]">
      <div>
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-p mt-5">
            From intuitive design to powerful featrues, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn
            column={firstColumn}
            duration={15}
          ></TestimonialsColumn>
          <div className="hidden md:block">
            <TestimonialsColumn
              column={secondColumn}
              duration={19}
            ></TestimonialsColumn>
          </div>

          <div className="hidden lg:block">
            <TestimonialsColumn
              column={thirdColumn}
              duration={17}
            ></TestimonialsColumn>
          </div>
        </div>
      </div>
    </section>
  );
}
