export enum AppRoutes {
  BOARDS = 'boards',
  BOARD_DETAILS = 'board_details',
  SIGN_IN = 'sign_in',
  SIGN_UP = 'sign_up',
  NOT_FOUND = 'not_found',
}

export const routes = {
  getRouteBoards: () => '/',
  getRouteBoardDetails: (id: string) => `/board/${id}`,
  getRouteSignUp: () => '/signup',
  getRouteSignIn: () => '/login',
};
