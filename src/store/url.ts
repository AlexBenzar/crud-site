import { AuthType, ProfileType, RegistrationType, getProfileType } from "types/index";

export const URL = "http://localhost:5000/"; //http://35.158.242.57:5000/

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
    return { url: "api/signup", method: "POST", body, formData: true };
  },
  signIn: (body: AuthType) => ({
    url: "api/signin",
    method: "POST",
    body,
  }),
  users: () => ({
    url: "api/users",
  }),
  getUser: (id: string) => ({
    url: `api/user/${id}`,
  }),
  getDashboard: () => ({
    url: `api/dashboard/`,
  }),
  patchUser: ({ id, email, username, picture, role }: RegistrationType & { id: string }) => {
    const body = new FormData();
    body.append("username", username);
    body.append("email", email);
    body.append("role", role);
    picture && typeof picture !== "string" && body.append("picture", picture, picture.name);
    return { url: `api/user/${id}`, method: "PATCH", body };
  },
  deleteUser: (id: string) => ({
    url: `api/user/${id}`,
    method: "DELETE",
  }),
};

export const profileApiUrls = {
  getProfiles: ({ id, order, search }: getProfileType) => ({
    url: `profiles/profile/${id}?order=${order}&search=${search}`,
  }),
  getProfilesCount: (id: string) => ({
    url: `profiles/profile_count/${id}`,
  }),
  postProfile: ({ id, photo, full_name, birthdate, city, gender }: ProfileType & { id: string }) => {
    const body = new FormData();
    body.append("full_name", full_name);
    body.append("birthdate", birthdate);
    body.append("city", city);
    body.append("gender", gender);
    photo && typeof photo !== "string" && body.append("photo", photo, photo.name);

    return { url: `profiles/profile/${id}`, method: "POST", body, formData: true };
  },
  updateProfile: ({ id, photo, full_name, birthdate, city, gender }: ProfileType & { id: string }) => {
    const body = new FormData();
    body.append("full_name", full_name);
    body.append("birthdate", birthdate);
    body.append("city", city);
    body.append("gender", gender);
    photo && typeof photo !== "string" && body.append("photo", photo, photo.name);
    return { url: `profiles/profile/${id}`, method: "PATCH", body, formData: true };
  },
  deleteProfile: (id: string) => ({
    url: `profiles/profile/${id}`,
    method: "DELETE",
  }),
};
