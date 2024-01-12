import { Formik, FormikHelpers } from "formik";
import styles from "./UserForm.module.scss";
import { Button, Checkbox, CustomForm, ImgInput, TextInput, Typography } from "common/index";
import { RegistrationType } from "types/index";
import { EditUserValidation } from "validation/index";
import { useState } from "react";

export const UserForm: React.FC = () => {
  const initialValues: RegistrationType = {
    username: "john_duke34553",
    email: "john_duke34553@gmail.com",
    password: "",
    role: "user",
    picture: null,
  };
  const [isAdmin, setIsAdmin] = useState(false);
  const handleSubmit = async ({ ...values }: RegistrationType, { setSubmitting }: FormikHelpers<RegistrationType>) => {
    console.log(values);
    setSubmitting(false);
  };
  function changeUserRole(values: RegistrationType) {
    values.role = !isAdmin ? "admin" : "user";
    setIsAdmin(!isAdmin);
  }
  return (
    <div className={styles.edit}>
      <Formik initialValues={initialValues} validationSchema={EditUserValidation} onSubmit={handleSubmit}>
        {({ isSubmitting, handleSubmit, setFieldValue, values }) => (
          <CustomForm onSubmit={handleSubmit} className={styles.edit__form}>
            <Typography variant="title-3" className={styles.edit__title}>
              Edit
            </Typography>
            <ImgInput className={styles.edit__img} setFieldValue={setFieldValue} image={values.picture} imageName="picture" />
            <div className={styles.edit__input}>
              <Typography variant="body-1" className={styles.edit__text}>
                Username
              </Typography>
              <TextInput type="text" name="username" placeholder="Username" isBlack={true} />
            </div>
            <div className={styles.edit__input}>
              <Typography variant="body-1" className={styles.edit__text}>
                Email
              </Typography>
              <TextInput type="email" name="email" placeholder="Email" isBlack={true} />
            </div>
            <div className={styles.edit__checkbox}>
              <Typography variant="body-1" className={styles.edit__text}>
                Role
              </Typography>
              <Checkbox
                name="role"
                text="Admin"
                className={styles.edit__role}
                checked={isAdmin}
                onChange={() => changeUserRole(values)}
              />
            </div>
            <div className={styles.edit__buttons}>
              <Button text="Save" isBlack={true} isSubmitting={isSubmitting} className={styles.edit__button} />
              <Button text="Close" isBlack={true} />
            </div>
          </CustomForm>
        )}
      </Formik>
    </div>
  );
};
