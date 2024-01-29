import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "store/constants";
import { profileApiUrls } from "store/url";
import { ProfileType, getProfileType } from "types/index";

export const profileApi = createApi({
  reducerPath: "profileApi",
  tagTypes: ["Profiles"],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getProfiles: builder.query<ProfileType[], getProfileType>({
      query: profileApiUrls.getProfiles,
      providesTags: ["Profiles"],
      forceRefetch: () => true,
    }),
    getProfilesCount: builder.query<string, string>({
      query: profileApiUrls.getProfilesCount,
      forceRefetch: () => true,
    }),
    postProfile: builder.mutation<{ message: string }, ProfileType & { id: string }>({
      query: profileApiUrls.postProfile,
      invalidatesTags: ["Profiles"],
    }),
    patchProfile: builder.mutation<{ message: string }, ProfileType & { id: string }>({
      query: profileApiUrls.updateProfile,
      invalidatesTags: ["Profiles"],
    }),
    deleteProfile: builder.mutation<{ message: string }, string>({
      query: profileApiUrls.deleteProfile,
      invalidatesTags: ["Profiles"],
    }),
  }),
});

export const {
  useGetProfilesQuery,
  usePostProfileMutation,
  usePatchProfileMutation,
  useDeleteProfileMutation,
  useGetProfilesCountQuery,
} = profileApi;
