import { BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "store/store";
import { URL } from "store/url";
import { ErrorMessage, ProfileType } from "types/index";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}/profiles`,
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
    getProfiles: builder.query<ProfileType, string>({
      query: (id) => ({
        url: `profile${id}`,
        method: "GET",
      }),
      forceRefetch: () => true,
    }),
  }),
});

export const { useGetProfilesQuery } = profileApi;
