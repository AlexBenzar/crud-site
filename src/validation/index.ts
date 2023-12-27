import * as Yup from "yup";
import { ErrorMessages } from "./message";

export const validationSchema = Yup.object().shape({
  username: Yup.string().required(ErrorMessages.UserNameEmpty),
  email: Yup.string().email(ErrorMessages.EmailError).required(ErrorMessages.EmailEmpty),
  password: Yup.string()
    .min(4, ErrorMessages.PasswordError)
    .max(15, ErrorMessages.PasswordError)
    .required("Password is required"),
  isAdmin: Yup.boolean(),
  picture: Yup.mixed()
    .nullable()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .test("type", ErrorMessages.PictureError, (value: any) => {
      return value ? value.type === "image/jpeg" || value.type === "image/png" : true;
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .test(ErrorMessages.PictureTooBig, (value: any) => {
      return value ? value?.size <= 1024 * 1024 : true;
    }),
});
