import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageLoading from '@/components/common/PageLoading';
import Layout from '@/layout/Layout';
import SubPage from '@/pages/admin/SubPage';
import NotFound from '@/pages/NotFound';

const Admin = lazy(() => import('@/pages/Admin'));
const Front = lazy(() => import('@/pages/Front'));
const Login = lazy(() => import('@/pages/Login'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path={`/`}
            element={
              <Suspense fallback={<PageLoading />}>
                <Front />
              </Suspense>
            }
          />
          <Route
            path={`/login`}
            element={
              <Suspense fallback={<PageLoading />}>
                <Login />
              </Suspense>
            }
          />
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
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
