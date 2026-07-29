import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayout from "../Layouts/MainLayout";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
        path:'',
        element:<Home/>,
       },
        {
        path:'about',
        element:<About/>,
       },
        {
        path:'contact',
        element:<Contact/>,
       },
  ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoute;
