import { SignUp } from "./pages";

export const publicRoutes = [
  {
    path: "/signUp",
    Component: <SignUp />,
  },
  {
    path: "/signIn",
    Component: <div>Sign In</div>,
  },
];

export const privateRoutes = [
  {
    path: "/profiles",
    Component: "Profiles",
  },
];
