import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import "scss/style.scss";
import { useAppSelector } from "store/hooks";

function App() {
  const token = !!useAppSelector((state) => state.user.token);

  return token ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}

      <Route path="*" element={<Navigate to="/profiles" />} />
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
