import { FormikErrors } from "formik";
import { RegistrationType } from "./authTypes";
import { ProfileType } from "./profileTypes";

export interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isSubmitting?: boolean;
  isBlack?: boolean;
}

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isBlack?: boolean;
  text?: string;
}

export interface FormInterface extends React.HTMLProps<HTMLFormElement> {
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

type Font = "title-1" | "title-2" | "title-3" | "body-1" | "body-2" | "body-3" | "error-1";

export interface TypographyType extends React.HTMLAttributes<HTMLDivElement> {
  variant: Font;
  children: React.ReactNode;
}
