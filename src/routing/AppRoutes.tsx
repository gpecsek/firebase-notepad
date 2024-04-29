import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import App from "../App";
import Login from "../pages/auth/Login";

const AppRoutes = () => {
  const currentUser = false ;

  return (
    <BrowserRouter>
      <Routes>
        {currentUser ? (
          <Route element={<App />}>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route index element={<Navigate to="/app/home" />} />
          </Route>
        ) : (
          <>
            <Route path="auth/*" element={<Login />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
