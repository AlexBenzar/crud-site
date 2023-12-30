import { Formik, FormikHelpers } from "formik";
import { SignInForm } from "types";
import styles from "./SignIn.module.scss";
import { signInValidation } from "validation";
import { BigButton, CustomForm, TextInput, Typography } from "components/index";
import { Link } from "react-router-dom";
import { useSignInMutation } from "store/slices/userSlice";

export const SignIn: React.FC<{ onSubmit?: (value: SignInForm) => SignInForm }> = ({ onSubmit }) => {
  const [signIn] = useSignInMutation();
  const initialValues: SignInForm = {
    username: "",
    password: "",
  };
  const handleSubmit = async (values: SignInForm, { setSubmitting }: FormikHelpers<SignInForm>) => {
    await signIn(values);
    if (onSubmit) {
      onSubmit(values);
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.signIn}>
      <Formik initialValues={initialValues} validationSchema={signInValidation} onSubmit={handleSubmit}>
        {({ isSubmitting, handleSubmit }) => (
          <CustomForm onSubmit={handleSubmit}>
            <Typography tag="h1" variant="title-1">
              Sign in
            </Typography>
            <TextInput type="username" name="username" placeholder="Username" />
            <TextInput type="password" name="password" placeholder="Password" />
            <BigButton text={"Sign In"} isSubmitting={isSubmitting} />
            <div className={styles.signUp__text}>
              <Typography tag="p" variant="body-1">
                Have an account?
              </Typography>
              <Link to="/signUp">Sign up</Link>
            </div>
          </CustomForm>
        )}
      </Formik>
    </div>
  );
};
