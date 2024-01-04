import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignUp } from "pages/index";
import { Wrapper } from "./Wrapper";
import { ErrorMessages } from "validation/message";
import * as userApi from "store/slices/authSlice";

describe("Sign in form testing", () => {
  it("if data is correct", async () => {
    const spySignIn = vi.spyOn(userApi, "useSignUpMutation");
    render(
      <Wrapper>
        <SignUp />
      </Wrapper>,
    );
    await userEvent.type(screen.getByPlaceholderText("Username"), "Alex");
    await userEvent.type(screen.getByPlaceholderText("Email"), "alex@gmail.com");
    await userEvent.type(screen.getByPlaceholderText("Password"), "12345");
    await userEvent.click(screen.getByTestId("checkbox"));
    await userEvent.click(screen.getByText("Sign Up"));
    expect(spySignIn).toHaveBeenCalled();
  });
  it("if data is empty", async () => {
    render(
      <Wrapper>
        <SignUp />
      </Wrapper>,
    );

    await userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText(ErrorMessages.UserNameEmpty)).toBeInTheDocument();
    expect(screen.getByText(ErrorMessages.EmailEmpty)).toBeInTheDocument();
    expect(screen.getByText(ErrorMessages.PasswordEmpty)).toBeInTheDocument();
  });
  it("if data isn't correct", async () => {
    render(
      <Wrapper>
        <SignUp />
      </Wrapper>,
    );
    await userEvent.type(screen.getByPlaceholderText("Password"), "123");
    await userEvent.type(screen.getByPlaceholderText("Email"), "alex");
    await userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText(ErrorMessages.PasswordError)).toBeInTheDocument();
    expect(screen.getByText(ErrorMessages.EmailError)).toBeInTheDocument();
  });
});
