import React from "react";
import type HeroscreenBlockProps from "./HeroscreenBlock.interface";
import styles from "./HeroscreenBlock.module.css";
import Image from "next/image";

const HeroscreenBlock: React.FC<HeroscreenBlockProps> = ({ hero_image }) => {
  return (
    <div className={styles.HeroscreenBlock}>
      {process.env.PAYLOAD_URL &&
        hero_image.map((image, index) => (
          <Image
            src={process.env.PAYLOAD_URL + image.url}
            alt={image.alt}
            width={300}
            height={400}
            objectFit="cover"
            objectPosition="center"
            key={index}
          />
        ))}
    </div>
  );
};

export default HeroscreenBlock;
