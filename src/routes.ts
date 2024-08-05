import { createBrowserRouter } from "react-router-dom";
import { Error404, HomePage, PokemonDetailPage } from "pages";
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
        path: "/pokemon/:name",
        Component: PokemonDetailPage,
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);
