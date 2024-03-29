import { getUserData } from '@/store/user/getUserSelectors.ts';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { routes } from '../config/router';

interface RequireAuthProps {
  children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const auth = useSelector(getUserData);
  const location = useLocation();

  if (!auth) {
    return <Navigate replace state={{ from: location }} to={routes.getRouteSignIn()} />;
  }
  return children;
}
