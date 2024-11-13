import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Layout = lazy(() => import("../components/Layout/Index"));

const router = createBrowserRouter(
  createRoutesFromElements([
    // Admin Routes
    <Route key={"/"} path="/" element={<Layout />}>
    </Route>,
  ])
);

const RouterWithSuspense = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default RouterWithSuspense;
