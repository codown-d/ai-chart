import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "antd-style";
import { StyleToken } from "./constant/styleToken.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      theme={{
        token: StyleToken,
      }}
    >
      <App />
    </ThemeProvider>
    ,
  </StrictMode>
);
