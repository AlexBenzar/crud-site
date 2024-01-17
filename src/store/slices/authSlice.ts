import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "store/store";
import { URL, authApiUrls } from "store/url";
import { ErrorMessage, User, AuthType, RegistrationType, UserResponse } from "types/index";

export const authApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Users", "User"],
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
      query: authApiUrls.signUp,
      invalidatesTags: ["Users"],
    }),
    signIn: builder.mutation<UserResponse, AuthType>({
      query: authApiUrls.signIn,
    }),
    Users: builder.query<User[], void>({
      query: authApiUrls.users,
      providesTags: ["Users"],
    }),
    GetUserData: builder.query<User, string>({
      query: authApiUrls.getUser,
      providesTags: ["User"],
    }),
    PatchUserData: builder.mutation<{ message: string }, RegistrationType & { id: string }>({
      query: authApiUrls.patchUser,
      invalidatesTags: ["User", "Users"],
    }),
    DeleteUserData: builder.mutation<{ message: string }, string>({
      query: authApiUrls.deleteUser,
      invalidatesTags: ["User", "Users"],
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
