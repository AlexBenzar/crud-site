import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "store/constants";
import { authApiUrls } from "store/url";
import { User, AuthType, RegistrationType, UserResponse, Dashboard } from "types/index";

export const authApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Users", "User"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    signUp: builder.mutation<UserResponse, RegistrationType>({
      query: authApiUrls.signUp,
      invalidatesTags: ["User", "Users"],
    }),
    signIn: builder.mutation<UserResponse, AuthType>({
      query: authApiUrls.signIn,
      invalidatesTags: ["User", "Users"],
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
    GetDashboardData: builder.query<Dashboard, void>({
      query: authApiUrls.getDashboard,
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
  useGetDashboardDataQuery,
} = authApi;
