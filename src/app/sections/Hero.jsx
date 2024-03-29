"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/app/styles";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

export default function Hero() {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial={`hidden`}
        whileInView={`show`}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1
            variants={textVariant(1.1)}
            className={`${styles.heroHeading}`}
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row items-center justify-center"
          >
            <h1 className={`${styles.heroHeading}`}>Ma</h1>
            <div className={`${styles.heroDText}`} />
            <h1 className={`${styles.heroHeading}`}>Ness</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={`relative w-full md:-mt-[20px] -mt-[12px]`}
        >
          <div className="w-full absolute h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <div className="w-full relative sm:h-[500px] h-[350px]  rounded-tl-[140px]  z-10 overflow-hidden">
            <Image
              src={`/cover.png`}
              alt="cover image"
              fill
              sizes="100%"
              className="object-cover "
            />
          </div>

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <div className="relative sm:w-[155px] w-[100px] sm:h-[155px] h-[155px]">
                <Image
                  src={`/stamp.png`}
                  alt="stamp image"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
