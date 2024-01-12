import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateUserRoutes, privateAdminRoutes } from "./routes";
import "scss/style.scss";
import { useAppSelector } from "store/hooks";
import { Layout } from "./modules";

function App() {
  const token = !!useAppSelector((state) => state.user.token);
  const role = useAppSelector((state) => state.user.role);

  return token ? (
    <Routes>
      <Route element={<Layout />}>
        {role === "user"
          ? privateUserRoutes.map(({ path, Component }) => <Route key={path} path={path} element={Component} />)
          : privateAdminRoutes.map(({ path, Component }) => <Route key={path} path={path} element={Component} />)}
        <Route path="*" element={<Navigate to="/profiles" />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate to="/signIn" />} />
    </Routes>
  );
}

export default App;
