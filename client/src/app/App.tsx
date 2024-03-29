import { getUserInited } from '@/store/user/getUserSelectors.ts';
import { initAuthData } from '@/store/user/initAuthData.ts';
import { useAppDispatch } from '@/utils/hooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

function App() {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData());
    }
  }, [dispatch, inited]);
  return (
    <main>
      {/*<Header />*/}
      {inited && <AppRouter />}
    </main>
  );
}

export default App;
