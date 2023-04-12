import React from "react";
import styles from "./layout.module.css";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  isSelected?: boolean;
  onClick?: () => void;
}

const Icon: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  isSelected,
  onClick,
}: Props) => {
  return (
    <div className={styles.container}>
      <Image priority src={src} height={height} width={width} alt={alt} />
    </div>
  );
};

export default Icon;
