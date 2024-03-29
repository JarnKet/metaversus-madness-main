"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, zoomIn } from "@/utils/motion";

export default function Feedback() {
  return (
    <section className={`${styles.paddings} z-10 relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={`show`}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex  flex-col lg:flex-row gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Samatha
            </h4>
            <p className="mt-[8px] sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              Founder | Metaversus
            </p>
          </div>
          <p className="mt-[24px] sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            “With the development of today&apos;s technology, metaverse is very
            useful for today&apos;s work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex items-center justify-center flex-1"
        >
          <div className="relative w-full lg:h-[610px] h-auto min-h-[210px] rounded-[40px] overflow-hidden">
            <Image
              src={`/planet-09.png`}
              alt="planet-09"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%] "
          >
            <div className="relative w-[155px] h-[155px]">
              <Image
                src={`/stamp.png`}
                alt="stamp"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
