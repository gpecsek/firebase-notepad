import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { AppRoutes } from "./routing/AppRoutes";
import { AuthProvider } from "./contexts/authContext";

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </React.StrictMode>
  );
}
