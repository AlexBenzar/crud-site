import { ErrorMessage, Field } from "formik";
import styles from "./CustomSelect.module.scss";
import { Typography } from "common/Typography/Typography";
import { city, county } from "./constant";
import { CustomSelectType } from "types/index";

export const CustomSelect: React.FC<CustomSelectType> = ({ list = "city", ...props }) => {
  return (
    <label htmlFor={props.name} className={`${styles.select} ${props.className}`}>
      <Field name={props.name} as="select" className={styles.input}>
        <option value="">{list}</option>
        {(list === "city" ? city : county).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Field>
      <ErrorMessage name={props.name || ""}>{(msg) => <Typography variant="error-1">{msg}</Typography>}</ErrorMessage>
    </label>
  );
};
