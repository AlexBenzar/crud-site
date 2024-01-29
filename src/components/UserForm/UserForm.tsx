import { Formik, FormikHelpers } from "formik";
import styles from "./UserForm.module.scss";
import { Button, Checkbox, CustomForm, ImgInput, TextInput, Typography } from "common/index";
import { RegistrationType, EditFormType, ErrorResponse } from "types/index";
import { EditUserValidation } from "validation/index";
import { useState } from "react";
import { usePatchUserDataMutation } from "store/slices/authSlice";

export const UserForm: React.FC<EditFormType> = ({ data, isOpen }) => {
  const [editUser, { error }] = usePatchUserDataMutation();
  const initialValues: RegistrationType = {
    username: data.username,
    email: data.email,
    password: "",
    role: data.role,
    picture: data.picture,
  };
  const [isAdmin, setIsAdmin] = useState(data.role == "admin" ? true : false);
  const handleSubmit = async ({ ...values }: RegistrationType, { setSubmitting }: FormikHelpers<RegistrationType>) => {
    const { error }: ErrorResponse = await editUser({ id: data._id, ...values });
    if (!error) {
      setSubmitting(false);
      isOpen(false);
    }
  };
  function changeUserRole(values: RegistrationType) {
    values.role = !isAdmin ? "admin" : "user";
    setIsAdmin(!isAdmin);
  }
  return (
    <div className={styles.edit} onClick={() => isOpen(false)}>
      <Formik initialValues={initialValues} validationSchema={EditUserValidation} onSubmit={handleSubmit}>
        {({ isSubmitting, handleSubmit, setFieldValue, values }) => (
          <CustomForm onSubmit={handleSubmit} className={styles.edit__form} onClick={(e) => e.stopPropagation()}>
            <Typography variant="title-3" className={styles.edit__title}>
              Edit
            </Typography>
            <ImgInput
              className={styles.edit__img}
              setFieldValue={setFieldValue}
              image={values.picture as File}
              imageName="picture"
            />
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
              <Button text="Close" isBlack={true} onClick={() => isOpen(false)} />
            </div>
            {error && "data" in error && <Typography variant="error-1">{error.data.message}</Typography>}
          </CustomForm>
        )}
      </Formik>
    </div>
  );
};
