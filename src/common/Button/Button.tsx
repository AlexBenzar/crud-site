import React from "react";
import styles from "./Button.module.scss";
import { BigButtonType } from "types";

export const BigButton: React.FC<BigButtonType> = ({ text = "", isBlack = false, isSubmitting, ...props }) => {
  return (
    <button
      {...props}
      type="submit"
      disabled={isSubmitting}
      className={`${props.className} ${styles.button}  ${isBlack ? styles.black : ""}`}
    >
      {text}
    </button>
  );
};
