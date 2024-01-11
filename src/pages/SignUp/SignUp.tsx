import { Formik, FormikHelpers } from "formik";
import { RegistrationType, UserResponse } from "types";
import styles from "./SignUp.module.scss";
import { signUpValidation } from "validation";
import { BigButton, Checkbox, CustomForm, ImgInput, TextInput, Typography } from "common/index";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "store/slices/authSlice";
import { useAppDispatch } from "store/hooks";
import { setCredentials } from "store/slices/userSlice";
import Cookies from "universal-cookie";
import { useState } from "react";

export const SignUp: React.FC = () => {
  const [signUp, { error }] = useSignUpMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initialValues: RegistrationType = {
    username: "",
    email: "",
    password: "",
    role: "user",
    picture: null,
    rememberMe: false,
  };
  const [check, setCheck] = useState(false);
  const handleSubmit = async (
    { rememberMe, ...values }: RegistrationType,
    { setSubmitting }: FormikHelpers<RegistrationType>,
  ) => {
    const { data, error }: { data?: UserResponse; error?: unknown } = await signUp({ ...values });
    if (!error && data) {
      dispatch(setCredentials(data));
      if (rememberMe) {
        const cookies = new Cookies();
        cookies.set("token", data, { expires: new Date(Date.now() + 86400000) });
      }
      setSubmitting(false);
      navigate("/");
    }
  };

  function isAdmin(values: RegistrationType) {
    values.role = values.role == "user" ? "admin" : "user";
    setCheck(!check);
  }

  return (
    <div className={styles.signUp}>
      <Formik initialValues={initialValues} validationSchema={signUpValidation} onSubmit={handleSubmit}>
        {({ isSubmitting, handleSubmit, setFieldValue, values }) => (
          <CustomForm onSubmit={handleSubmit} className={styles.signUp__form}>
            <Typography variant="title-1" className={styles.signUp__h1}>
              Sign up
            </Typography>
            <ImgInput className={styles.signUp__img} setFieldValue={setFieldValue} image={values.picture} imageName="picture" />
            <TextInput type="text" name="username" placeholder="Username" className={styles.signUp__input} />
            <TextInput type="email" name="email" placeholder="Email" className={styles.signUp__input} />
            <TextInput type="password" name="password" placeholder="Password" className={styles.signUp__input} />
            <div className={styles.signUp__checkbox}>
              <Checkbox name="role" text="Admin" checked={check} onChange={() => isAdmin(values)} />
              <Checkbox text="Remember me" name="rememberMe" />
            </div>
            <BigButton text={"Sign Up"} isSubmitting={isSubmitting} className={styles.signUp__button} />
            <Typography variant="body-1" className={styles.signUp__text}>
              Have an account? <Link to="/signIn">Sign in</Link>
            </Typography>
            {error && "data" in error && <Typography variant="error-1">{error.data.message}</Typography>}
          </CustomForm>
        )}
      </Formik>
    </div>
  );
};
