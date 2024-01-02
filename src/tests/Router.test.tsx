import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { Wrapper } from "./Wrapper";

describe("Routing test", () => {
  it("If Links work", async () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>,
    );
    expect(screen.getByTestId(/Sign In/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/Sign Up/i));
    expect(screen.getByTestId(/Sign Up/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/Sign In/i));
    expect(screen.getByTestId(/Sign In/i)).toBeInTheDocument();
  });
});
