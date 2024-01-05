import { Formik, FormikHelpers } from "formik";
import { SignUpForm, UserResponse } from "types";
import styles from "./SignUp.module.scss";
import { signUpValidation } from "validation";
import { BigButton, Checkbox, CustomForm, ImgInput, TextInput, Typography } from "components/index";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "store/slices/authSlice";
import { useAppDispatch } from "store/hooks";
import { setCredentials } from "store/slices/userSlice";
import Cookies from "universal-cookie";

export const SignUp: React.FC = () => {
  const [signUp, { error }] = useSignUpMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialValues: SignUpForm = {
    username: "",
    email: "",
    password: "",
    isAdmin: false,
    picture: null,
    rememberMe: false,
  };
  const handleSubmit = async ({ rememberMe, ...values }: SignUpForm, { setSubmitting }: FormikHelpers<SignUpForm>) => {
    const { data, error }: { data?: UserResponse; error?: unknown } = await signUp(values);
    if (!error && data) {
      dispatch(setCredentials({ ...data }));
      if (rememberMe) {
        const cookies = new Cookies();
        cookies.set("token", data);
      }
      setSubmitting(false);
      navigate("/");
    }
  };

  return (
    <div className={styles.signUp}>
      <Formik initialValues={initialValues} validationSchema={signUpValidation} onSubmit={handleSubmit}>
        {({ isSubmitting, handleSubmit, setFieldValue, values }) => (
          <CustomForm onSubmit={handleSubmit}>
            <Typography tag="h1" variant="title-1">
              Sign up
            </Typography>
            <ImgInput setFieldValue={setFieldValue} image={values.picture} imageName="picture" />
            <TextInput type="text" name="username" placeholder="Username" />
            <TextInput type="email" name="email" placeholder="Email" />
            <TextInput type="password" name="password" placeholder="Password" />
            <div className={styles.signUp__buttons}>
              <Checkbox name="isAdmin" text="Admin" />
              <Checkbox text="Remember me" name="rememberMe" />
            </div>
            <BigButton text={"Sign Up"} isSubmitting={isSubmitting} />
            <div className={styles.signUp__text}>
              <Typography tag="p" variant="body-1">
                Have an account?
              </Typography>{" "}
              <Link to="/signIn">Sign in</Link>
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
