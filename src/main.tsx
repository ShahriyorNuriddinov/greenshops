import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import ProviderConf from "./provider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderConf>
      <RouterProvider router={router} />
    </ProviderConf>
  </StrictMode>
);
