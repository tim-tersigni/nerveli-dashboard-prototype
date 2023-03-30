import React, { ReactNode } from "react";
import styles from './layout.module.css';

type Props = {
  image: string;
  alt: string;
}

const Icon = ({ image, alt }: Props) => {
  return(
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={alt} />
    </div>
  )
};

export default Icon