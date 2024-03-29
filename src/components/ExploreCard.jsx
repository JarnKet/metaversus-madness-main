"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/app/styles";
import { fadeIn } from "@/utils/motion";

export default function ExploreCard({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        fill
        size="100%"
        className="object-cover rounded-[24px]"
      />

      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:ordinal-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <div className="relative w-1/2 h-1/2">
              <Image
                src="/headset.svg"
                alt="headset icon"
                fill
                size="100%"
                className="object-contain"
              />
            </div>
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase ">
            Enter the metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
}
