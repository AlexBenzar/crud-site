import { AuthType, ProfileType, RegistrationType } from "types/index";

export const URL = "http://localhost:5000/";

export const authApiUrls = {
  signUp: ({ username, email, password, role, picture }: RegistrationType) => {
    const body = new FormData();
    body.append("username", username);
    body.append("email", email);
    body.append("password", password);
    body.append("role", role);
    picture && typeof picture !== "string"
      ? body.append("picture", picture, picture.name)
      : body.append("picture", JSON.stringify(picture));
    return { url: "signup", method: "POST", body, formData: true };
  },
  signIn: (body: AuthType) => ({
    url: "signin",
    method: "POST",
    body,
  }),
  users: () => ({
    url: "users",
  }),
  getUser: (id: string) => ({
    url: `user/${id}`,
  }),
  patchUser: ({ id, email, username, picture, role }: RegistrationType & { id: string }) => {
    const body = new FormData();
    body.append("username", username);
    body.append("email", email);
    body.append("role", role);
    picture && typeof picture !== "string" && body.append("picture", picture, picture.name);
    return { url: `user/${id}`, method: "PATCH", body };
  },
  deleteUser: (id: string) => ({
    url: `user/${id}`,
    method: "DELETE",
  }),
};

export const profileApiUrls = {
  getProfiles: (id: string) => ({
    url: `profile/${id}`,
  }),
  postProfile: ({ id, photo, full_name, birthdate, city, gender }: ProfileType & { id: string }) => {
    const body = new FormData();
    body.append("full_name", full_name);
    body.append("birthdate", birthdate);
    body.append("city", city);
    body.append("gender", gender);
    photo && typeof photo !== "string" && body.append("photo", photo, photo.name);

    return { url: `profile/${id}`, method: "POST", body, formData: true };
  },
  deleteProfile: (id: string) => ({
    url: `profile/${id}`,
    method: "DELETE",
  }),
};
