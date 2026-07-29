import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import { getUser } from "../api/userApi";

let Contact = lazy(() => import("../pages/Contact"));
let About = lazy(() => import("../pages/About"));

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "about",
          loader: getUser,
          hydrateFallbackElement: <h1> Loading User Data </h1>,
          element: (
            <Suspense fallback={<h1> About page loading</h1>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<h1> Contact page loading</h1>}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
