import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'src/components/PageLoader';

import { routeConfig } from '../config/routeConfig';
import { AppRoutesProps } from '../config/router';
import { RequireAuth } from './RequireAuth';

const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        key={route.path}
        path={route.path}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
export default AppRouter;
