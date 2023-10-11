import { PageLoader } from "components/ui/PageLoader";
import { Suspense, useCallback } from "react";
import { Route, type RouteProps, Routes } from "react-router-dom";
import { routeConfig } from "./routeConfig";

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className={"page-wrapper"}>{route.element}</div>
      </Suspense>
    );
    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
