import { Profiles, SignIn, SignUp, Users } from "./pages";

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
  {
    path: "/users",
    Component: <Users />,
  },
  {
    path: "/dashboard",
    Component: <>Dashboard</>,
  },
];
