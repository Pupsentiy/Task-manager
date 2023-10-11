import { BoardsPage } from "pages/BoardsPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { BoardDetailsPage } from "pages/ProjectDetailsPage";
import {RouteProps} from "react-router-dom";
import { AppRoutes, RoutePath } from "utils/const/router";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.BOARDS]: {
        path: RoutePath.boards,
        element: <BoardsPage />
    },
    [AppRoutes.BOARD_DETAILS]: {
        path: RoutePath.board_details + ':id',
        element: <BoardDetailsPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}