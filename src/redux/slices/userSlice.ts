import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthForm } from "types/index";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    postSignUp: builder.mutation<unknown, AuthForm>({
      query: ({ username, email, password, isAdmin, picture }) => {
        const body = new FormData();
        body.append("username", username);
        body.append("email", email);
        body.append("password", password);
        body.append("isAdmin", JSON.stringify(isAdmin));
        picture ? body.append("picture", picture, picture.name) : body.append("picture", JSON.stringify(picture));
        return { url: "signup", method: "POST", body, formData: true };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePostSignUpMutation } = userApi;
