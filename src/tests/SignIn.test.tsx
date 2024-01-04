import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignIn } from "pages/index";
import { Wrapper } from "./Wrapper";
import { ErrorMessages } from "validation/message";
import * as userApi from "store/slices/authSlice";

describe("Sign in form testing", () => {
  it("if data is correct", async () => {
    const spySignIn = vi.spyOn(userApi, "useSignInMutation");
    render(
      <Wrapper>
        <SignIn />
      </Wrapper>,
    );

    await userEvent.type(screen.getByPlaceholderText("Username"), "Alex");
    await userEvent.type(screen.getByPlaceholderText("Password"), "12345");
    await userEvent.click(screen.getByText("Sign In"));
    expect(spySignIn).toHaveBeenCalled();
  });
  it("if data is empty", async () => {
    render(
      <Wrapper>
        <SignIn />
      </Wrapper>,
    );
    await userEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText(ErrorMessages.UserNameEmpty)).toBeInTheDocument();
    expect(screen.getByText(ErrorMessages.PasswordEmpty)).toBeInTheDocument();
  });
  it("if password isn't correct", async () => {
    render(
      <Wrapper>
        <SignIn />
      </Wrapper>,
    );
    await userEvent.type(screen.getByPlaceholderText("Password"), "123");
    await userEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText(ErrorMessages.PasswordError)).toBeInTheDocument();

    await userEvent.type(screen.getByPlaceholderText("Password"), "123456789123456");
    await userEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText(ErrorMessages.PasswordError)).toBeInTheDocument();
  });
});
