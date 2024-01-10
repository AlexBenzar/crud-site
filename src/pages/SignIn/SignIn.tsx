import Cookies from "universal-cookie";
import { Formik, FormikHelpers } from "formik";
import { AuthType, UserResponse } from "types";
import styles from "./SignIn.module.scss";
import { signInValidation } from "validation";
import { BigButton, Checkbox, CustomForm, TextInput, Typography } from "common/index";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "store/slices/authSlice";
import { useAppDispatch } from "store/hooks";
import { setCredentials } from "store/slices/userSlice";

export const SignIn: React.FC = () => {
  const [signIn, { error }] = useSignInMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialValues: AuthType = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const handleSubmit = async ({ rememberMe, ...values }: AuthType, { setSubmitting }: FormikHelpers<AuthType>) => {
    const { data, error }: { data?: UserResponse; error?: unknown } = await signIn(values);
    if (!error && data) {
      dispatch(setCredentials({ ...data }));
      if (rememberMe) {
        const cookies = new Cookies();
        cookies.set("token", data, { expires: new Date(Date.now() + 86400000) });
      }
      setSubmitting(false);
      navigate("/");
    }
  };

  return (
    <div className={styles.signIn}>
      <Formik initialValues={initialValues} validationSchema={signInValidation} onSubmit={handleSubmit}>
        {({ isSubmitting, handleSubmit }) => (
          <CustomForm onSubmit={handleSubmit} className={styles.signIn__form}>
            <Typography variant="title-1" className={styles.signIn__h1}>
              Sign in
            </Typography>
            <TextInput type="email" name="email" placeholder="Email" className={styles.signIn__input} />
            <TextInput type="password" name="password" placeholder="Password" className={styles.signIn__input} />
            <BigButton text={"Sign In"} isSubmitting={isSubmitting} className={styles.signIn__button} />
            <Checkbox text="Remember me" name="rememberMe" className={styles.signIn__checkbox} />
            <Typography variant="body-1" className={styles.signUp__text}>
              Have an account? <Link to="/signUp">Sign up</Link>
            </Typography>
            {error && "data" in error && <Typography variant="error-1">{error.data.message}</Typography>}
          </CustomForm>
        )}
      </Formik>
    </div>
  );
};
