import { createBrowserRouter } from "react-router-dom";
import { Error404, HomePage } from "pages";
import { MainLayout } from "layouts/mainLayout";

export const routes = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);
