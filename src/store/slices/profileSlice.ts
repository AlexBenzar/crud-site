import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "store/store";
import { URL, profileApiUrls } from "store/url";
import { ErrorMessage, ProfileType } from "types/index";

export const profileApi = createApi({
  reducerPath: "profileApi",
  tagTypes: ["Profiles"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}profiles/`,
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
    getProfiles: builder.query<ProfileType[], string>({
      query: profileApiUrls.getProfiles,
      providesTags: ["Profiles"],
    }),
    postProfile: builder.mutation<{ message: string }, ProfileType & { id: string }>({
      query: profileApiUrls.postProfile,
      invalidatesTags: ["Profiles"],
    }),
    deleteProfile: builder.mutation<{ message: string }, string>({
      query: profileApiUrls.deleteProfile,
      invalidatesTags: ["Profiles"],
    }),
  }),
});

export const { useGetProfilesQuery, usePostProfileMutation, useDeleteProfileMutation } = profileApi;
