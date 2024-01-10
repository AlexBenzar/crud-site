import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { AuthType } from "types/index";

const URL = "http://localhost:5000/api/";
const users = [
  {
    username: "Alex",
  },
  { username: "Ben" },
];

export const server = setupServer(
  http.post(URL + "signin", async ({ request }) => {
    const { email, password } = (await request.json()) as AuthType;
    if (email == "sahabenzar@gmail.com" && password == "12345") {
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
  http.get(URL + "user", async () => {
    return HttpResponse.json({ user: "Alex" });
  }),
  http.get(URL + "users", async () => {
    return HttpResponse.json(users);
  }),
);
