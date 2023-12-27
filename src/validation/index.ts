import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .max(15, "Password is to long")
    .required("Password is required"),
  isAdmin: Yup.boolean(),
  picture: Yup.mixed()
    .nullable()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .test("type", "Only the following formats are accepted: .jpeg, .jpg", (value: any) => {
      return value ? value.type === "image/jpeg" || value.type === "image/png" : true;
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .test("IMAGE_SIZE", "Uploaded image is too big", (value: any) => {
      return value ? value?.size <= 1024 * 1024 : true;
    }),
});
