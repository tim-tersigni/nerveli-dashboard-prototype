import React from "react";
import styles from '@/styles/layout.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  isSelected?: boolean;
  onClick?: () => void;
  path: string;
}

const Icon: React.FC<Props> = ({ src, alt, width, height, isSelected, onClick, path }: Props) => {
  return (
    <Link href={path}>
      <div className={styles.container} onClick={onClick}>
        <Image
          priority
          src={src}
          height={height}
          width={width}
          alt={alt}
        />
      </div>
    </Link>
  );
};

export default Icon;