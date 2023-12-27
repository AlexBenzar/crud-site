import React from "react";
import styles from "./BigButton.module.scss";
import { BigButtonType } from "types";

export const BigButton: React.FC<BigButtonType> = ({ text = "", isSubmitting }) => {
  return (
    <button type="submit" disabled={isSubmitting} className={styles.button}>
      {text}
    </button>
  );
};
