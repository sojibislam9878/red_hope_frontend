import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { PageConfigProvider } from "./hooks/PageConfigProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <PageConfigProvider>
        <RouterProvider router={router} />
      </PageConfigProvider>
    </AuthProvider>
  </StrictMode>
);
