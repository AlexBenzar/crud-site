import { Profiles, SignIn, SignUp, User, Users, Dashboard } from "./pages";

export const publicRoutes = [
  {
    path: "/signUp",
    Component: <SignUp />,
  },
  {
    path: "/signIn",
    Component: <SignIn />,
  },
  {
    path: "/dashboard",
    Component: <Dashboard />,
  },
];

export const privateUserRoutes = [
  {
    path: "/profiles",
    Component: <Profiles />,
  },
];

export const privateAdminRoutes = [
  {
    path: "/profiles",
    Component: <Profiles />,
  },
  {
    path: "/users",
    Component: <Users />,
  },
  {
    path: "/users/:id",
    Component: <User />,
  },
  {
    path: "/dashboard",
    Component: <>Dashboard</>,
  },
];
