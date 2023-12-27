import { Formik, FormikHelpers } from "formik";
import { AuthForm } from "types";
import styles from "./SignUp.module.scss";
import { validationSchema } from "validation";
import { BigButton, Checkbox, CustomForm, ImgInput, TextInput, Typography } from "components/index";
import { Link, useNavigate } from "react-router-dom";
import { usePostSignUpMutation } from "Redux/slices/userSlice";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [addUser] = usePostSignUpMutation();
  const initialValues: AuthForm = {
    username: "",
    email: "",
    password: "",
    isAdmin: false,
    picture: null,
  };

  const handleSubmit = (values: AuthForm, { setSubmitting }: FormikHelpers<AuthForm>) => {
    setTimeout(async () => {
      addUser(values);
      setSubmitting(false);
      navigate("/signIn");
    }, 500);
  };

  return (
    <div className={styles.signUp}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
