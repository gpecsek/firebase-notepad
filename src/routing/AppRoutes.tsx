import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import App from "../App";
import Login from "../pages/auth/components/Login";
import SignUp from "../pages/auth/components/SignUp";
import { useAuth } from "../contexts/authContext";
import AuthPage from "../pages/auth/AuthPage";

const AppRoutes = () => {
  const user = useAuth();
  console.log("User : ", user);

  const userLoggedIn = user.userLoggedIn;

  return (
    <BrowserRouter>
      <Routes>
        {userLoggedIn ? (
          <Route element={<App />}>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route index element={<Navigate to="/home" />} />
          </Route>
        ) : (
          <>
            <Route path="auth/*" element={<AuthPage />} />

            <Route path="*" element={<Navigate to="/auth" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
