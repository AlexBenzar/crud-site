import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useSignInMutation } from "store/slices/userSlice";
import { Wrapper } from "./Wrapper";

describe("userSlice testing", () => {
  it("if post request to user database is fulfilled", async () => {
    const user = { username: "Alex", password: "12345" };
    const { result } = renderHook(() => useSignInMutation(), { wrapper: Wrapper });
    await act(() => result.current[0](user));
    const { data, status } = result.current[1];

    expect(data).toStrictEqual({ token: "token" });
    expect(status).toBe("fulfilled");
  });
  it("if post request to user database is fulfilled", async () => {
    const user = { username: "", password: "" };
    const { result } = renderHook(() => useSignInMutation(), { wrapper: Wrapper });
    await act(() => result.current[0](user));
    const { status } = result.current[1];

    expect(status).toBe("rejected");
  });
});
