import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Installation from "../Pages/Installation/Installation";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Loading from "../Pages/Loading/Loading";
import AppNotFoundError from "../Componets/AppNotFoundError/AppNotFoundError";

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
        loader: async ({ params }) => {
          const data = await fetch("/AppData.json").then((res) => res.json());
          const app = data.find((item) => item.id === parseInt(params.id));
          if (!app) {
            throw new Response("App Not Found in Data Set", {
              status: 404,
              statusText: "Not Found",
            });
          }
          return app;
        },
        Component: AppDetails,
        errorElement: <AppNotFoundError />,
      },
      {
        path: "installation",
        loader: () => fetch("/AppData.json"),
        Component: Installation,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
