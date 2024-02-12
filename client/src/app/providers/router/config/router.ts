export enum AppRoutes {
  BOARDS = "boards",
  BOARD_DETAILS = "board_details",
  NOT_FOUND = "not_found",
}

export const getRouteBoards = () => "/";
export const getRouteBoardDetails = (id: string) => `/board/${id}`;
