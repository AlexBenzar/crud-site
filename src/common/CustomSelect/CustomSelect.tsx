import { ErrorMessage, Field } from "formik";
import styles from "./CustomSelect.module.scss";
import { Typography } from "common/Typography/Typography";
import { city } from "./constant";

export const CustomSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  return (
    <label htmlFor={props.name} className={`${styles.select} ${props.className}`}>
      <Field name={props.name} as="select" className={styles.input}>
        <option value="">City</option>
        {city.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Field>
      <ErrorMessage name={props.name || ""}>{(msg) => <Typography variant="error-1">{msg}</Typography>}</ErrorMessage>
    </label>
  );
};
