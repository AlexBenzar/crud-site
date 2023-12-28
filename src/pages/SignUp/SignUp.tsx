import { Formik, FormikHelpers } from "formik";
import { SignUpForm } from "types";
import styles from "./SignUp.module.scss";
import { signUpValidation } from "validation";
import { BigButton, Checkbox, CustomForm, ImgInput, TextInput, Typography } from "components/index";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "store/slices/userSlice";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUpMutation();
  const initialValues: SignUpForm = {
    username: "",
    email: "",
    password: "",
    isAdmin: false,
    picture: null,
  };
  const handleSubmit = async (values: SignUpForm, { setSubmitting }: FormikHelpers<SignUpForm>) => {
    await signUp(values);
    setSubmitting(false);
    navigate("/signIn");
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
            <Checkbox name="isAdmin" text="Admin" />
            <BigButton text={"Sign Up"} isSubmitting={isSubmitting} />
            <div className={styles.signUp__text}>
              <Typography tag="p" variant="body-1">
                Have an account?
              </Typography>{" "}
              <Link to="/signIn">Sign in</Link>
            </div>
          </CustomForm>
        )}
      </Formik>
    </div>
  );
};
