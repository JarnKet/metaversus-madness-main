"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";

import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";

import { StartSteps } from "@/components";
import { TitleText, TypingText } from "@/components/CustomTexts";

import { startingFeatures } from "@/constants";

export default function GetStarted() {
  return (
    <section className={`${styles.paddings} z-10 relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={`show`}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter} flex-1`}
        >
          <div className="w-[90%] h-[90%] relative">
            <Image
              src={`/get-started.png`}
              alt="get started"
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={`| How Metaversus Works`} />
          <TitleText title={<>Get start with just a few clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
