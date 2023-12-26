import { Formik, FormikValues, FormikHelpers } from "formik";
import { AuthForm } from "types";
import styles from "./SignUp.module.scss";
import Avatar from "img/svg/avatar.svg";
import { validationSchema } from "validation";
import { BigButton, Checkbox, CustomForm, TextInput, Typography } from "components/index";

export const SignUp: React.FC = () => {
  const initialValues: AuthForm = {
    username: "",
    email: "",
    password: "",
    isAdmin: false,
  };

  const handleSubmit = (values: FormikValues, { setSubmitting }: FormikHelpers<AuthForm>) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className={styles.signUp}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, handleSubmit }) => (
          <CustomForm onSubmit={handleSubmit}>
            <Typography tag="h1" variant="title-1">
              Sign up
            </Typography>
            <div className={styles.signUp__picture}>
              <img src={Avatar} alt="avatar" />
              <Typography tag="div" variant="body-1">
                Choose picture
              </Typography>
            </div>
            <TextInput type="text" name="username" placeholder="Username" />
            <TextInput type="email" name="email" placeholder="Email" />
            <TextInput type="password" name="password" placeholder="Password" />
            <Checkbox name="isAdmin" text="Admin" />
            <BigButton text={"Sign Up"} isSubmitting={isSubmitting} />
            <div className={styles.signUp__text}>
              <Typography tag="p" variant="body-1">
                Have an account?
              </Typography>{" "}
              <a href="">Sign in</a>
            </div>
          </CustomForm>
        )}
      </Formik>
    </div>
  );
};
