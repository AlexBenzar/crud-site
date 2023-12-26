export type AuthForm = {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

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
  variant: "title-1" | "body-1";
  children: string;
};
