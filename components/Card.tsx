import React, { ReactNode } from "react";
import styles from "./card.module.css";

interface Props {
  title: string;
  body: string;
  children?: ReactNode;
}

function Card({ title, body, children }: Props) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{body}</p>
      {children}
    </div>
  );
}

export default Card;
