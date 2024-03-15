export enum AppRoutes {
  BOARD_DETAILS = 'board_details',
  BOARDS = 'boards',
  NOT_FOUND = 'not_found',
  SIGN_IN = 'sign_in',
  SIGN_UP = 'sign_up',
}

export const routes = {
  getRouteBoardDetails: (id: string) => `/board/${id}`,
  getRouteBoards: () => '/',
  getRouteSignIn: () => '/login',
  getRouteSignUp: () => '/signup',
};
