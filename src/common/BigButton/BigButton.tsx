import React from "react";
import styles from "./BigButton.module.scss";
import { BigButtonType } from "types";

export const BigButton: React.FC<BigButtonType> = ({ text = "", isSubmitting, ...props }) => {
  return (
    <button {...props} type="submit" disabled={isSubmitting} className={`${props.className} ${styles.button}`}>
      {text}
    </button>
  );
};
