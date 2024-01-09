import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { AuthType } from "types/index";

const URL = "http://localhost:5000/api/";

export const server = setupServer(
  http.post(URL + "signin", async ({ request }) => {
    const { username, password } = (await request.json()) as AuthType;
    if (username == "Alex" && password == "12345") {
      return HttpResponse.json({ token: "token" });
    }
    return HttpResponse.error();
  }),
  http.post(URL + "signup", async ({ request }) => {
    const data = await request.formData();
    if (data.get("username") == "Alex" && data.get("password") == "12345") {
      return HttpResponse.json({ token: "token" });
    }
    return HttpResponse.error();
  }),
);
