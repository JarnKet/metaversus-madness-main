"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";

import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";

import { NewFeatures } from "@/components";
import { TitleText, TypingText } from "@/components/CustomTexts";
import { newFeatures } from "@/constants";

export default function WhatsNew() {
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
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={`| What's New?`} />
          <TitleText title={<>What&apos;s new about Metaversus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px] ">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} flex-1`}
        >
          <div className="w-[90%] h-[90%] relative">
            <Image
              src={`/whats-new.png`}
              alt="what's new"
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}