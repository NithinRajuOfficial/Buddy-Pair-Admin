import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Layout = lazy(() => import("../components/Layout/Index"));
const AdminDashboard = lazy(() =>
  import("../components/Layout/Dashboard/Index")
);

const router = createBrowserRouter(
  createRoutesFromElements([
    // Admin Routes
    <Route
      key={"/admin/dashboard"}
      path="/admin/dashboard"
      element={<Layout />}
    >
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
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
