import React from "react";
import styles from "./TextInput.module.scss";
import { Field, ErrorMessage } from "formik";
import { InputProps } from "types";
import { Typography } from "..";

export const TextInput: React.FC<InputProps> = ({ isBlack = false, ...props }) => {
  return (
    <label htmlFor={props.name} className={styles.label}>
      <Field
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={`${styles.input} ${isBlack ? styles.black : ""}`}
      />
      <ErrorMessage name={props.name || ""}>
        {(msg) => (
          <Typography tag="div" variant="error-1">
            {msg}
          </Typography>
        )}
      </ErrorMessage>
    </label>
  );
};
