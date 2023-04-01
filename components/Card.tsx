import React from "react";
import styles from "../styles/Home.module.css";

interface CardProps {
  title: string;
  body: string;
  children?: ReactNode;
}

function Card({ title, body, children }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{body}</p>
      {children}
    </div>
  );
}

export default Card;
