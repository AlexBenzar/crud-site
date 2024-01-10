import { FormikErrors } from "formik";

export interface AuthType {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegistrationType extends AuthType {
  username: string;
  isAdmin: boolean;
  picture: File | null;
}

export interface User extends AuthType {
  picture: string;
  role: string;
  __v: number;
  _id: string;
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

type Font = "title-1" | "title-2" | "body-1" | "body-2" | "error-1";

export interface TypographyType extends React.HTMLAttributes<HTMLDivElement> {
  variant: Font;
  children: React.ReactNode;
}

export interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  setFieldValue: (field: string, value: unknown, shouldValidate?: boolean) => Promise<void | FormikErrors<RegistrationType>>;
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
