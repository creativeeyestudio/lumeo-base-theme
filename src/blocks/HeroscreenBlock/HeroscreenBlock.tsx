import React from "react";
import HeroscreenBlockProps from "./HeroscreenBlock.interface";
import styles from "./HeroscreenBlock.module.css";
import Image from "next/image";

const HeroscreenBlock: React.FC<HeroscreenBlockProps> = ({
  hero_image,
  className,
}) => {
  if (!process.env.PAYLOAD_URL) {
    console.error("Payload URL not found");
    return null;
  }

  return (
    <figure className={`${styles.HeroscreenBlock} ${className ?? ""}`}>
      <Image
        src={process.env.PAYLOAD_URL + hero_image.url}
        alt={hero_image.alt ?? ""}
        fill
        className={styles.HeroscreenBlock__image}
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
    </figure>
  );
};

export default HeroscreenBlock;
