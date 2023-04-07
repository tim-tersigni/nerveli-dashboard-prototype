import React from "react";
import styles from "./button.module.css";

interface Props {
    label: string;
}
  
  function Button({label}: Props) {
    return (
      <div className={styles.button}>
        <p>{label}</p>
      </div>
    );
}

export default Button;