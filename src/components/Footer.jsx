"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/app/styles";
import { socials } from "@/constants";
import { footerVariants } from "@/utils/motion";

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView={`show`}
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />

      <div className={`${styles.innerWidth} flex flex-col mx-auto gap-8`}>
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white ">
            Enter the Metaversus
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px] "
          >
            <div className="relative w-[24px] h-[24px]">
              <Image
                src={`/headset.svg`}
                alt="button"
                fill
                size="100%"
                className="object-contain"
              />
            </div>
            <span className="font-normal text-[16px] text-white">
              Enter the Metaversus
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              METAVERSUS
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <button
                  type="button"
                  key={social.name}
                  className="relative w-[24px] h-[24px]"
                >
                  <Image
                    src={social.url}
                    alt={social.name}
                    fill
                    size="100%"
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
