import React from "react";
import { createRoot } from "react-dom/client";

import StartPage from "./pages/StartPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<StartPage />);
