import { BoardsPage } from "@/pages/BoardsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

import { RouteProps } from "react-router-dom";
import { BoardDetailsPage } from "src/pages/BoardDetailsPage";
import { AppRoutes, getRouteBoardDetails, getRouteBoards } from "./router";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.BOARDS]: {
    path: getRouteBoards(),
    element: <BoardsPage />,
  },
  [AppRoutes.BOARD_DETAILS]: {
    path: getRouteBoardDetails(":id"),
    element: <BoardDetailsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
