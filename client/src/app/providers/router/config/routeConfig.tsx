import { AuthPage } from '@/pages/AuthPage';
import { BoardDetailsPage } from '@/pages/BoardDetailsPage';
import { BoardsPage } from '@/pages/BoardsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, routes } from './router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.BOARDS]: {
    path: routes.getRouteBoards(),
    element: <BoardsPage />,
  },
  [AppRoutes.BOARD_DETAILS]: {
    path: routes.getRouteBoardDetails(':id'),
    element: <BoardDetailsPage />,
  },
  [AppRoutes.SIGN_IN]: {
    path: routes.getRouteSignIn(),
    element: <AuthPage isSignIn={true} />,
  },
  [AppRoutes.SIGN_UP]: {
    path: routes.getRouteSignUp(),
    element: <AuthPage isSignIn={false} />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
