import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import Tanstack from "./Tanstack.jsx";
import {
  QueryClient,
  QueryClientProvider,
  
} from "@tanstack/react-query";
import Infinite from "./Infinite";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
     <QueryClientProvider client={queryClient}>
<Infinite />
     </QueryClientProvider>
);
