import { Profiles, SignIn, SignUp } from "./pages";

export const publicRoutes = [
  {
    path: "/signUp",
    Component: <SignUp />,
  },
  {
    path: "/signIn",
    Component: <SignIn />,
  },
];

export const privateRoutes = [
  {
    path: "/profiles",
    Component: <Profiles />,
  },
];
