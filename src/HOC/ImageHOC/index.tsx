/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image, { ImageProps } from "next/image";
import styles from "./index.module.css";

type ImageHOCProps = ImageProps & {
  classWrapper?: string;
};

const ImageHOC: React.FC<ImageHOCProps> = ({ classWrapper, ...props }) => {
  return (
    <div className={classWrapper + " " + styles.wrapper}>
      <Image layout="fill" objectFit="cover" {...props} />
    </div>
  );
};

export default ImageHOC;
