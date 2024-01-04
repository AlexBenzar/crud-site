import { Formik, FormikHelpers } from "formik";
import { SignInForm, UserResponse } from "types";
import styles from "./SignIn.module.scss";
import { signInValidation } from "validation";
import { BigButton, CustomForm, TextInput, Typography } from "components/index";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "store/slices/authSlice";
import { useAppDispatch } from "store/hooks";
import { setCredentials } from "store/slices/userSlice";

export const SignIn: React.FC = () => {
  const [signIn, { error }] = useSignInMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialValues: SignInForm = {
    username: "",
    password: "",
  };
  const handleSubmit = async (values: SignInForm, { setSubmitting }: FormikHelpers<SignInForm>) => {
    const { data, error }: { data?: UserResponse; error?: unknown } = await signIn(values);

    if (!error && data) {
      dispatch(setCredentials({ ...data }));
      setSubmitting(false);
      navigate("/");
    }
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
            {error && "data" in error && (
              <Typography tag="div" variant="error-1">
                {error.data.message}
              </Typography>
            )}
          </CustomForm>
        )}
      </Formik>
    </div>
  );
};
