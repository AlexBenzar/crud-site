import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useSignInMutation, useSignUpMutation } from "store/slices/userSlice";
import { Wrapper } from "./Wrapper";

describe("userSlice testing", () => {
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
  it("if sign up request to users database is fulfilled", async () => {
    const user = { email: "alex@gmail.com", isAdmin: false, password: "12345", picture: null, username: "Alex" };
    const { result } = renderHook(() => useSignUpMutation(), { wrapper: Wrapper });
    await act(() => result.current[0](user));
    const { data, status } = result.current[1];

    expect(data).toStrictEqual({ message: "success" });
    expect(status).toBe("fulfilled");
  });
});
