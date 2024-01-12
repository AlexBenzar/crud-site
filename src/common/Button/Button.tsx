import React from "react";
import styles from "./Button.module.scss";
import { ButtonType } from "types";

export const Button: React.FC<ButtonType> = ({ text = "", isBlack = false, isSubmitting, ...props }) => {
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
