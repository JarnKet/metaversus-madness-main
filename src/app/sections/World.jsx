"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";

import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";

export default function World() {
  return (
    <section className={`${styles.paddings} z-10 relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={`show`}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col `}
      >
        <TypingText
          title={`| People on the World`}
          textStyles={`text-center`}
        />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles={`text-center`}
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <div className="relative w-full h-full">
            <Image
              src={`/map.png`}
              alt="map"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
            <Image
              src={`/people-01.png`}
              alt="people"
              className="object-contain"
              height={70}
              width={70}
            />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
            <Image
              src={`/people-02.png`}
              alt="people"
              className="object-contain"
              height={70}
              width={70}
            />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
            <Image
              src={`/people-03.png`}
              alt="people"
              className="object-contain"
              height={70}
              width={70}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
