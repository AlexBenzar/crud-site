import React from "react";
import styles from "./CustomForm.module.scss";
import { FormInterface } from "types/index";

export const CustomForm: React.FC<FormInterface> = ({ children, ...props }) => {
  return (
    <form {...props} className={`${props.className} ${styles.form}`} onSubmit={props.onSubmit}>
      {children}
    </form>
  );
};
