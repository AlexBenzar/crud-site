import { FormikErrors } from "formik";

export interface SignInForm {
  username: string;
  password: string;
  rememberMe?: boolean;
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

export interface BigButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isSubmitting: boolean;
}

export interface FormInterface extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}

export interface TypographyType extends React.HTMLAttributes<HTMLDivElement> {
  variant: "title-1" | "body-1" | "error-1";
  children: React.ReactNode;
}

export interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  setFieldValue: (field: string, value: unknown, shouldValidate?: boolean) => Promise<void | FormikErrors<SignUpForm>>;
  image: File | null;
  imageName: string;
}

export interface ErrorMessage {
  data: { message: string };
  status: number;
}

export interface UserResponse {
  token: null | string;
}
