import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import "scss/style.scss";

function App() {
  const user = false;
  return user ? (
    <Routes>
      <Route path="*" element={<h1>Private Route</h1>} />
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
