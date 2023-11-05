import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageLoading from '@/components/common/PageLoading';
import SubPage from '@/pages/admin/SubPage';
import NotFound from '@/pages/NotFound';

const Admin = lazy(() => import('@/pages/Admin'));
const Front = lazy(() => import('@/pages/Front'));
const Login = lazy(() => import('@/pages/Login'));

const AppRoutes = () => {
  console.log('AppRoutes render...');
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/`}
          element={
            <Suspense fallback={<PageLoading />}>
              <Front />
            </Suspense>
          }
        />
        <Route path={`/login`} element={<Login />} />
        <Route
          path={`/admin`}
          element={
            <Suspense fallback={<PageLoading />}>
              <Admin />
            </Suspense>
          }
        >
          <Route path={'sub'} element={<SubPage />} />
        </Route>
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
