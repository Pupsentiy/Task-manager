import { Suspense, memo, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { PageLoader } from 'src/components/PageLoader';

import { routeConfig } from '../config/routeConfig';

const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return <Route element={element} key={route.path} path={route.path} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
export default AppRouter;
