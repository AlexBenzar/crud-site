import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "store/store";
import { URL } from "store/url";
import { ErrorMessage, SignInForm, SignUpForm, UserResponse } from "types/index";

export const authApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}api/`,
    credentials: "same-origin",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, ErrorMessage>,
  endpoints: (builder) => ({
    signUp: builder.mutation<{ message: string }, SignUpForm>({
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
    signIn: builder.mutation<UserResponse, SignInForm>({
      query: (body) => ({
        url: "signin",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
