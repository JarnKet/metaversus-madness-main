"use client";
import { motion } from "framer-motion";
import styles from "../styles";

import { staggerContainer } from "@/utils/motion";

import { InsightCard } from "@/components";
import { TitleText, TypingText } from "@/components/CustomTexts";

import { insights } from "@/constants";

export default function Insights() {
  return (
    <section className={`${styles.paddings} z-10 relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={`show`}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex  flex-col `}
      >
        <TypingText title={`| Insight`} textStyles={`text-center`} />
        <TitleText
          title={`Insight about metaverse `}
          textStyles={`text-center`}
        />
        <div className="mt-[50px] flex flex-col gap-[30px] ">
          {insights.map((insight, index) => (
            <InsightCard
              key={`insight-${index}`}
              index={index + 1}
              {...insight}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
