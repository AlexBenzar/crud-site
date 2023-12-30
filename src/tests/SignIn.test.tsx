import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignIn } from "pages/SignIn/SignIn";
import { Provider } from "react-redux";
import { store } from "store/store";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("renders headline", async () => {
    const handleSubmit = vi.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SignIn onSubmit={handleSubmit} />
        </Provider>
      </BrowserRouter>,
    );
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText("Username"), "Alex");
    await user.type(screen.getByPlaceholderText("Password"), "12345");

    await user.click(screen.getByText("Sign In"));
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        username: "Alex",
        password: "12345",
      }),
    );
  });
});
