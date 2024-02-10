import styles from "@/app/styles";
import Image from "next/image";

export default function NewFeatures({ title, subtitle, imgUrl }) {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <div className="relative w-1/2 h-1/2">
          <Image
            src={imgUrl}
            alt={title}
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white ">
        Title {title}
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] leading-[32px] text-[#b0b0b0]">
        {subtitle}
      </p>
    </div>
  );
}
