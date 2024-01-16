import { ErrorMessage, Field } from "formik";
import styles from "./CustomSelect.module.scss";
import { Typography } from "common/Typography/Typography";

export const CustomSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  const city = [
    "Київ",
    "Івано-Франківськ",
    "Вінниця",
    "Дніпро",
    "Донецьк",
    "Житомир",
    "Запоріжжя",
    "Кропивницький",
    "Луганськ",
    "Луцьк",
    "Львів",
    "Миколаїв",
    "Одеса",
    "Полтава",
    "Рівне",
    "Сімферополь",
    "Суми",
    "Тернопіль",
    "Ужгород",
    "Харків",
    "Херсон",
    "Хмельницький",
    "Черкаси",
    "Чернівці",
    "Чернігів",
  ];

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
