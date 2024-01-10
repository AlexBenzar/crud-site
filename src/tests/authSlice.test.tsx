import { describe, expect, it } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useSignInMutation, useSignUpMutation, useProfilesQuery, useUsersQuery } from "store/slices/authSlice";
import { Wrapper } from "./Wrapper";

describe("userSlice testing", () => {
  describe("testing if user can sign up", () => {
    it("if sign up request to users database is fulfilled", async () => {
      const user = { email: "alex@gmail.com", isAdmin: false, password: "12345", picture: null, username: "Alex" };
      const { result } = renderHook(() => useSignUpMutation(), { wrapper: Wrapper });
      await act(() => result.current[0](user));
      const { data, status } = result.current[1];

      expect(data).toStrictEqual({ token: "token" });
      expect(status).toBe("fulfilled");
    });
    it("if sign up request to users database is rejected", async () => {
      const user = { email: "alex@gmai", isAdmin: false, password: "123", picture: null, username: "" };
      const { result } = renderHook(() => useSignUpMutation(), { wrapper: Wrapper });
      await act(() => result.current[0](user));
      const { status } = result.current[1];

      expect(status).toBe("rejected");
    });
  });
  describe("testing if user can sign in", () => {
    it("if sign in request to users database is fulfilled", async () => {
      const user = { username: "Alex", password: "12345" };
      const { result } = renderHook(() => useSignInMutation(), { wrapper: Wrapper });
      await act(() => result.current[0](user));
      const { data, status } = result.current[1];

      expect(data).toStrictEqual({ token: "token" });
      expect(status).toBe("fulfilled");
    });
    it("if sign in request to users database is rejected", async () => {
      const user = { username: "", password: "" };
      const { result } = renderHook(() => useSignInMutation(), { wrapper: Wrapper });
      await act(() => result.current[0](user));
      const { status } = result.current[1];

      expect(status).toBe("rejected");
    });
  });
  describe("testing if user can get his data", () => {
    it("must return fulfilled", async () => {
      const { result } = renderHook(() => useProfilesQuery(), { wrapper: Wrapper });
      await waitFor(() => {
        expect(result.current.status).toBe("fulfilled");
        expect(result.current.data).toStrictEqual({ user: "Alex" });
      });
    });
  });
  describe("testing if admin can get users", () => {
    it("must return fulfilled", async () => {
      const { result } = renderHook(() => useUsersQuery(), { wrapper: Wrapper });
      const users = [
        {
          username: "Alex",
        },
        { username: "Ben" },
      ];
      await waitFor(() => {
        expect(result.current.status).toBe("fulfilled");
        expect(result.current.data).toStrictEqual(users);
      });
    });
  });
});
