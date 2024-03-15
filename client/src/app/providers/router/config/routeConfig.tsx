import { AuthPage } from '@/pages/AuthPage';
import { BoardDetailsPage } from '@/pages/BoardDetailsPage';
import { BoardsPage } from '@/pages/BoardsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

import { AppRoutes, routes } from './router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.BOARD_DETAILS]: {
    element: <BoardDetailsPage />,
    path: routes.getRouteBoardDetails(':id'),
  },
  [AppRoutes.BOARDS]: {
    element: <BoardsPage />,
    path: routes.getRouteBoards(),
  },
  [AppRoutes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: '*',
  },
  [AppRoutes.SIGN_IN]: {
    element: <AuthPage isSignIn={true} />,
    path: routes.getRouteSignIn(),
  },
  [AppRoutes.SIGN_UP]: {
    element: <AuthPage isSignIn={false} />,
    path: routes.getRouteSignUp(),
  },
};
