"use client";

import { motion } from "framer-motion";
import { TypingText } from "@/components/CustomTexts";
import Image from "next/image";

import styles from "../styles";
import { fadeIn, staggerContainer } from "@/utils/motion";

export default function About() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="z-0 gradient-02" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={`show`}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title={`| About Metaversus`} textStyles={`text-center`} />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it&apos;s really real, you can feel what you feel in this
          metaverse world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let&apos;s{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative w-[18px] h-[28px] mt-[28px]"
        >
          <Image
            src={`/arrow-down.svg`}
            alt="arrow down icon"
            fill
            sizes="100%"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
