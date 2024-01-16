/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikErrors } from "formik";

export interface AuthType {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegistrationType extends AuthType {
  username: string;
  role: string;
  picture: File | null;
}

export interface User extends AuthType {
  username: string;
  picture: string;
  role: string;
  __v: number;
  _id: string;
}

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isBlack?: boolean;
  text?: string;
}

export interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isSubmitting?: boolean;
  isBlack?: boolean;
}

export interface FormInterface extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}

type Font = "title-1" | "title-2" | "title-3" | "body-1" | "body-2" | "body-3" | "error-1";

export interface TypographyType extends React.HTMLAttributes<HTMLDivElement> {
  variant: Font;
  children: React.ReactNode;
}

export interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean,
  ) => Promise<void | FormikErrors<RegistrationType | ProfileType>>;
  image: File | null;
  imageName: string;
}

export interface ErrorMessage {
  data: { message: string };
  status: number;
}

export interface UserResponse {
  token: null | string;
  role: null | string;
}

export interface PaginationType extends React.HTMLAttributes<HTMLDivElement> {
  total: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface UserFormType {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: User;
  refetch: any;
}

export interface ProfileType {
  _id: string;
  photo: string | File | null;
  full_name: string;
  gender: string;
  birthdate: string;
  city: string;
  user: string;
  __v: number;
}

export interface ProfileFormType {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: User;
  id?: string;
  refetch: any;
}
