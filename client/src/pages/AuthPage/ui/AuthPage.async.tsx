import { FC, lazy } from 'react';

import { AuthPageProps } from './AuthPage.tsx';

export const AuthPageAsync = lazy<FC<AuthPageProps>>(async () => await import('./AuthPage.tsx'));
