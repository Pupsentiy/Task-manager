export enum AppRoutes {
  BOARDS = 'boards',
  BOARD_DETAILS = 'board_details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.BOARDS]: '/',
  [AppRoutes.BOARD_DETAILS]: '/board/', // + :id
  [AppRoutes.NOT_FOUND]: '*'
}


