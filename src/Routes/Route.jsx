import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Installation from "../Pages/Installation/Installation";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Loading from "../Pages/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        loader: () => fetch("/AppData.json"),
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch("/AppData.json"),
        Component: Apps,
      },
      {
        path: "apps/:id",
        loader: () => fetch("/AppData.json"),
        Component: AppDetails,
      },
      {
        path: "installation",
        loader: () => fetch("/AppData.json"),
        Component: Installation,
      },
    ],
  },
]);
