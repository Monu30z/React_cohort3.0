import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter.jsx";
import { Provider } from "react-redux";
import { store } from "./App/store.jsx";
import { ToastContainer } from "react-toastify";



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer />
    <AppRouter />
  </Provider>,
);
