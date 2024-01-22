import { BaseQueryApi, BaseQueryFn, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "./url";
import { ErrorMessage } from "types/index";
import { RootState } from "./store";
import { logOut } from "./slices/userSlice";
import Cookies from "universal-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: `${URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
}) as BaseQueryFn<string | FetchArgs, unknown, ErrorMessage>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403) {
    api.dispatch(logOut());
    const cookies = new Cookies();
    cookies.remove("token");
  }

  return result;
};
