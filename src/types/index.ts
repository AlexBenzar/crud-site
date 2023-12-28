import { FormikErrors } from "formik";

export interface SignInForm {
  username: string;
  password: string;
}

export interface SignUpForm extends SignInForm {
  email: string;
  isAdmin: boolean;
  picture: File | null;
}

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isBlack?: boolean;
  text?: string;
}

export type BigButtonType = {
  text: string;
  isSubmitting: boolean;
};

export interface FormInterface extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}

export type TypographyType = {
  tag: "div" | "p" | "h1";
  variant: "title-1" | "body-1" | "error-1";
  children: string;
};

export type ImageProps = {
  setFieldValue: (field: string, value: unknown, shouldValidate?: boolean) => Promise<void | FormikErrors<SignUpForm>>;
  image: File | null;
  imageName: string;
};
