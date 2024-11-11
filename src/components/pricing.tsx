"use client";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];
export default function Pricing() {
  return (
    <section className="py-24 bg-white max-md:px-[1%]">
      <div>
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-p mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features{" "}
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={monthlyPrice}
                className={cn(`card`, {
                  "bg-black border-black  text-white": inverse,
                })}
              >
                <div className="flex justify-between">
                  <h3
                    className={cn("text-lg font-bold text-black/50", {
                      "text-white/60": inverse, // Conditional class based on `inverse`
                    })}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3dffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3dffff)] [background-size:200%] text-transparent bg-clip-text font-medium"
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          repeat: Infinity,
                          ease: "linear",
                          duration: 2,
                          repeatType: "loop",
                        }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-0">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={cn(`btn btn-primary w-full mt-[30px]`, {
                    "bg-white text-black": inverse,
                  })}
                >
                  {buttonText}
                </button>

                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm inline-flex items-center gap-4"
                    >
                      <CheckIcon className="text-green-500 h-6" />{" "}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
