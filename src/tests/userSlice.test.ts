import { logOut, setCredentials } from "store/slices/userSlice";
import { store } from "store/store";
import { describe, expect, it } from "vitest";

describe("userSlice tests", () => {
  it("if user signed up or signed in then it'll return token", () => {
    const token = { token: "token", role: "user" };
    const result = store.dispatch(setCredentials(token));
    const state = store.getState().user;
    expect(result.payload).toEqual(token);
    expect(state).toEqual(token);
  });
  it("if user logouted then it'll return null", () => {
    const token = { token: null, role: null };
    store.dispatch(logOut());
    const state = store.getState().user;
    expect(state).toEqual(token);
  });
});
