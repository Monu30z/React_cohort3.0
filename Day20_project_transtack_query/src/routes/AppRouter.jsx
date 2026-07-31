// import { toast } from "react-toastify";
// import React, { useEffect } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import { useDispatch } from "react-redux";
// import { addUser } from "../features/authSlice";
// import PublicProtected from "./protected/PublicProtected";
// import MainProtected from "./protected/MainProtected";
// import AuthLayout from "../layout/AuthLayout";
// import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";
// import MainLayout from "../layout/MainLayout";
// import Homepage from "../pages/Homepage";
// import Aboutpage from "../pages/Aboutpage";
// import Shoppage from "../pages/Shoppage";

import React, { useEffect, lazy, Suspense } from "react";
import { toast } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

// Lazy-loaded components
const PublicProtected = lazy(() => import("./protected/PublicProtected"));
const MainProtected = lazy(() => import("./protected/MainProtected"));

const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const MainLayout = lazy(() => import("../layout/MainLayout"));

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const Homepage = lazy(() => import("../pages/Homepage"));
const Aboutpage = lazy(() => import("../pages/Aboutpage"));
const Shoppage = lazy(() => import("../pages/Shoppage"));

const AppRoutes = () => {
  let dispatch = useDispatch();

  const hydrateUser = () => {
    console.log("hydration processed...");
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("UnAuthorized user");
      return;
    }

    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Homepage />,
            },
            {
              path:'about',
              element:<Aboutpage/>,
            },
            {
              path:"shop",
              element:<Shoppage/>,
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;