import React from "react";
import styles from "./Checkbox.module.scss";
import { Field } from "formik";
import { InputProps } from "types";
import { Typography } from "..";

export const Checkbox: React.FC<InputProps> = ({ text = "", ...props }) => {
  return (
    <label className={styles.label}>
      <Field type="checkbox" name={props.name} className={styles.input} />
      <Typography tag="p" variant="body-1">
        {text}
      </Typography>
    </label>
  );
};
