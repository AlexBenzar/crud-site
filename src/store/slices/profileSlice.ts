import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "store/store";
import { URL } from "store/url";
import { ErrorMessage, ProfileType } from "types/index";

export const profileApi = createApi({
  reducerPath: "profileApi",
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
      query: (id) => ({
        url: `profile/${id}`,
        method: "GET",
      }),
      forceRefetch: () => true,
    }),
    postProfile: builder.mutation<{ message: string }, ProfileType & { id: string }>({
      query: ({ id, photo, full_name, birthdate, city, gender }) => {
        const body = new FormData();
        body.append("full_name", full_name);
        body.append("birthdate", birthdate);
        body.append("city", city);
        body.append("gender", gender);
        photo && typeof photo !== "string" && body.append("photo", photo, photo.name);

        return { url: `profile/${id}`, method: "POST", body, formData: true };
      },
    }),
    deleteProfile: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `profile/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetProfilesQuery, usePostProfileMutation, useDeleteProfileMutation } = profileApi;
