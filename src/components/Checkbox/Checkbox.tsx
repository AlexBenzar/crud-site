import React from "react";
import styles from "./Checkbox.module.scss";
import { Field } from "formik";
import { InputProps } from "types";
import { Typography } from "..";

export const Checkbox: React.FC<InputProps> = ({ text = "", ...props }) => {
  return (
    <label className={`${styles.label} ${props.className}`}>
      <Field data-testid="checkbox" type="checkbox" name={props.name} className={styles.input} />
      <Typography variant="body-1">{text}</Typography>
    </label>
  );
};
