import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { SignInForm, SignUpForm } from "types/index";

export const server = setupServer(
  http.post("http://localhost:5000/api/signin", async ({ request }) => {
    const { username, password } = (await request.json()) as SignInForm;
    if (username == "Alex" && password == "12345") {
      return HttpResponse.json({ token: "token" });
    }
    return HttpResponse.error();
  }),
  http.post("http://localhost:5000/api/signup", async ({ request }) => {
    const { username } = (await request.json()) as SignUpForm;
    if (username == "Alex") {
      return HttpResponse.json({ message: "success" });
    }
    return HttpResponse.error();
  }),
);
