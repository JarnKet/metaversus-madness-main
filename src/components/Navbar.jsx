"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/app/styles";
import { navVariants } from "@/utils/motion";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView={`show`}
      className={`${styles.xPaddings} py-8 relative `}
    >
      <div className="absolute inset-0 w-1/2 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src="/search.svg"
          alt="search icon"
          width={24}
          height={24}
          className="object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          METAVERSUS
        </h2>
        <Image
          src={`/menu.svg`}
          alt={`menu icon`}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    </motion.nav>
  );
}
