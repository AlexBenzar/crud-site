import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "store/store";
import { URL } from "store/url";
import { ErrorMessage, User, AuthType, RegistrationType, UserResponse } from "types/index";

export const authApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}api/`,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, ErrorMessage>,
  endpoints: (builder) => ({
    signUp: builder.mutation<UserResponse, RegistrationType>({
      query: ({ username, email, password, role, picture }) => {
        const body = new FormData();
        body.append("username", username);
        body.append("email", email);
        body.append("password", password);
        body.append("role", role);
        picture ? body.append("picture", picture, picture.name) : body.append("picture", JSON.stringify(picture));
        return { url: "signup", method: "POST", body, formData: true };
      },
    }),
    signIn: builder.mutation<UserResponse, AuthType>({
      query: (body) => ({
        url: "signin",
        method: "POST",
        body,
      }),
    }),
    Users: builder.query<User[], void>({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      forceRefetch: () => true,
    }),
    GetUserData: builder.query<User, string>({
      query: (id) => ({
        url: `user/${id}`,
        method: "GET",
      }),
      forceRefetch: () => true,
    }),
    PatchUserData: builder.mutation<{ message: string }, RegistrationType & { id: string }>({
      query: ({ id, email, username, picture, role }) => {
        const body: { email: string; username: string; role: string; picture?: null | File } = { email, username, role };
        if (picture) {
          body.picture = picture;
        }
        return { url: `user/${id}`, method: "PATCH", body };
      },
    }),
    DeleteUserData: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `user/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetUserDataQuery,
  useUsersQuery,
  usePatchUserDataMutation,
  useDeleteUserDataMutation,
} = authApi;
