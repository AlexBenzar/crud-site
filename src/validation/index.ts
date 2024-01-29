import * as Yup from "yup";
import { ErrorMessages } from "./message";

export const EditUserValidation = Yup.object().shape({
  username: Yup.string().required(ErrorMessages.UserNameEmpty),
  email: Yup.string().email(ErrorMessages.EmailError).required(ErrorMessages.EmailEmpty),
  isAdmin: Yup.boolean(),
  picture: Yup.mixed()
    .nullable()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .test("type", ErrorMessages.PictureError, (value: any) => {
      return value ? typeof value === "string" || value.type === "image/jpeg" || value.type === "image/png" : true;
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .test(ErrorMessages.PictureTooBig, (value: any) => {
      return value && typeof value !== "string" ? value?.size <= 1024 * 1024 * 5 : true;
    }),
});

export const signUpValidation = EditUserValidation.shape({
  password: Yup.string()
    .min(4, ErrorMessages.PasswordError)
    .max(15, ErrorMessages.PasswordError)
    .required(ErrorMessages.PasswordEmpty),
});

export const signInValidation = Yup.object().shape({
  email: Yup.string().email(ErrorMessages.EmailError).required(ErrorMessages.EmailEmpty),
  password: Yup.string()
    .min(4, ErrorMessages.PasswordError)
    .max(15, ErrorMessages.PasswordError)
    .required(ErrorMessages.PasswordEmpty),
});

export const profileValidation = Yup.object().shape({
  full_name: Yup.string().required(ErrorMessages.FullNameEmpty),
  birthdate: Yup.date().required(ErrorMessages.DateEmpty),
  city: Yup.string().required(ErrorMessages.CityEmpty),
  country: Yup.string().required(ErrorMessages.CountryEmpty),
  photo: Yup.mixed()
    .nullable()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .test("type", ErrorMessages.PictureError, (value: any) => {
      return value ? typeof value === "string" || value.type === "image/jpeg" || value.type === "image/png" : true;
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .test(ErrorMessages.PictureTooBig, (value: any) => {
      return value && typeof value !== "string" ? value?.size <= 1024 * 1024 * 5 : true;
    }),
});
