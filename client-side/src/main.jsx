import "./index.css";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@material-tailwind/react";
import RouterWithSuspense from "./router/Index";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterWithSuspense />
  </ThemeProvider>
);
