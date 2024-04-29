import { lazy } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

const AppContentRoutes = () => (
  <div>
    {/* Other layout content */}
    <Outlet /> {/* Nested routes will render here */}
  </div>
);
const PrivateRoutes = () => {
  const Home = lazy(() => import("../pages/home/Home"));

  return (
    <Routes>
      <Route path="auth/*" element={<Navigate to="/app/home" />} />
      {/* Pages */}
      <Route path="/app/" element={<AppContentRoutes />}>
        <Route path="home" element={<Home />} />
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/app/home" />} />
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
